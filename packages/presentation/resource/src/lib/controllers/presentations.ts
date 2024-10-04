import { ApiPage, QueryParamsDto, User } from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import {
  Presentation,
  PresentationComment,
} from '@devmx/shared-api-interfaces';
import {
  PresentationDto,
  PresentationsFacade,
  UpdatePresentationDto,
  CreatePresentationDto,
  CreatedPresentationDto,
  PresentationCommentsFacade,
  CreatePresentationCommentDto,
  PresentationCommentDto,
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

@ApiBearerAuth()
@ApiTags('Apresentações')
@Controller('presentations')
export class PresentationsController {
  constructor(
    private readonly presentationsFacade: PresentationsFacade,
    private readonly presentationCommentsFacade: PresentationCommentsFacade
  ) {}

  @Post()
  @ApiOkResponse({ type: CreatedPresentationDto })
  async create(@User('id') owner: string, @Body() data: CreatePresentationDto) {
    try {
      return await this.presentationsFacade.create({ ...data, owner });
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

      if (!presentation.visible && presentation.owner.id !== account) {
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

  @Post(':id/comments')
  // @ApiOkResponse({ type: CreatedPresentationCommentDto })
  async createComment(
    @User('id') account: string,
    @Param('id') presentation: string,
    @Body() data: CreatePresentationCommentDto
  ) {
    try {
      const value = { ...data, presentation, account };
      return await this.presentationCommentsFacade.create(value);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id/comments')
  @ApiOkResponse({ type: PresentationCommentDto })
  async findComments(
    @Param('id') presentation: string,
    @Query() params: QueryParamsDto<PresentationComment>
  ) {
    try {
      return await this.presentationCommentsFacade.find(presentation, params);
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

    if (presentation.owner.id !== account) {
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

    if (presentation.owner.id !== account) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.presentationsFacade.remove(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
