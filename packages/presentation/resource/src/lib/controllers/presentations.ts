import { ApiPage, QueryParamsDto, User } from '@devmx/shared-data-source';
import { Presentation } from '@devmx/shared-api-interfaces';
import { exceptionByError } from '@devmx/shared-resource';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  CreatedPresentationDto,
  CreatePresentationDto,
  PresentationDto,
  PresentationsFacade,
  UpdatePresentationDto,
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
} from '@nestjs/common';

@ApiTags('Apresentações')
@Controller('presentations')
export class PresentationsController {
  constructor(private readonly presentationsFacade: PresentationsFacade) {}

  @Post()
  @ApiOkResponse({ type: CreatedPresentationDto })
  async create(
    @User('id') account: string,
    @Body() createPresentationDto: CreatePresentationDto
  ) {
    try {
      return await this.presentationsFacade.create({
        ...createPresentationDto,
        account,
      });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @ApiPage(PresentationDto)
  async findAll(@Query() params: QueryParamsDto<Presentation>) {
    try {
      return await this.presentationsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: PresentationDto })
  async findOne(@User('id') account: string, @Param('id') id: string) {
    try {
      const presentation = await this.presentationsFacade.findOne(id);

      if (!presentation.visible && presentation.account.id !== account) {
        throw exceptionByError({ code: 403, message: 'Acesso negado' });
      }

      return presentation;
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Apresentação não encontrada',
      });
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: PresentationDto })
  async update(
    @User('id') account: string,
    @Param('id') id: string,
    @Body() updatePresentationDto: UpdatePresentationDto
  ) {
    const presentation = await this.presentationsFacade.findOne(id);

    if (!presentation) {
      throw exceptionByError({
        code: 404,
        message: 'Apresentação não encontrada',
      });
    }

    if (presentation.account.id !== account) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.presentationsFacade.update(id, updatePresentationDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: PresentationDto })
  async remove(@User('id') account: string, @Param('id') id: string) {
    const presentation = await this.presentationsFacade.findOne(id);

    if (!presentation) {
      throw exceptionByError({
        code: 404,
        message: 'Apresentação não encontrada',
      });
    }

    if (presentation.account.id !== account) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.presentationsFacade.remove(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
