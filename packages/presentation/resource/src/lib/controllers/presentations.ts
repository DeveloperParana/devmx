import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthUser, Presentation } from '@devmx/shared-api-interfaces';
import { exceptionByError } from '@devmx/shared-resource';
import {
  User,
  Allowed,
  ApiPage,
  QueryParamsDto,
  authIsAdmin,
  Roles,
} from '@devmx/shared-data-source';
import {
  PresentationDto,
  PresentationsFacade,
  UpdatePresentationDto,
  CreatePresentationDto,
  CreatedPresentationDto,
} from '@devmx/presentation-data-source';
import {
  Get,
  Post,
  Body,
  Query,
  Patch,
  Param,
  Delete,
  Controller,
  NotFoundException,
} from '@nestjs/common';

@ApiTags('Apresentações')
@Controller('presentations')
export class PresentationsController {
  constructor(private readonly presentationsFacade: PresentationsFacade) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreatedPresentationDto })
  async create(@User('id') owner: string, @Body() data: CreatePresentationDto) {
    try {
      return await this.presentationsFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(PresentationDto)
  async findAll(@Query() params: QueryParamsDto<Presentation>) {
    try {
      return await this.presentationsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @Allowed()
  @ApiOkResponse({ type: PresentationDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.presentationsFacade.findOne(id);
    } catch (err) {
      throw new NotFoundException('Apresentação não encontrada');
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: PresentationDto })
  async update(
    @User('id') user: string,
    @Param('id') id: string,
    @Body() updatePresentationDto: UpdatePresentationDto
  ) {
    const presentation = await this.presentationsFacade.findOne(id);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    if (presentation.owner.id !== user) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.presentationsFacade.update(id, updatePresentationDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: PresentationDto })
  @Roles(['director', 'manager', 'staff', 'speaker'])
  async remove(@User() auth: AuthUser, @Param('id') id: string) {
    const presentation = await this.presentationsFacade.findOne(id);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    if (presentation.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.presentationsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
