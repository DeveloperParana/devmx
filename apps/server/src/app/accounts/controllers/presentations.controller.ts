import { Presentation, PresentationComment } from '../schemas';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PresentationsFacade } from '../facades';
import { QueryParamsDto } from '../dtos';
import { User } from '../../shared';
import {
  CreatePresentationCommentDto,
  CreatePresentationDto,
  UpdatePresentationCommentDto,
  UpdatePresentationDto,
} from '../dtos';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

@ApiBearerAuth()
@ApiTags('Presentations')
@Controller('presentations')
export class PresentationsController {
  constructor(private readonly presentationsFacade: PresentationsFacade) {}

  @Post()
  async create(
    @User('sub') account: string,
    @Body() createPresentationDto: CreatePresentationDto
  ) {
    try {
      return await this.presentationsFacade.create({
        ...createPresentationDto,
        account,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Post(':id/comments')
  async createComment(
    @User('sub') account: string,
    @Param('id') presentation: string,
    @Body() createPresentationCommentDto: CreatePresentationCommentDto
  ) {
    try {
      return await this.presentationsFacade.createComment({
        ...createPresentationCommentDto,
        presentation,
        account,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get()
  async findAll(@Query() params: QueryParamsDto<Presentation>) {
    try {
      return await this.presentationsFacade.find(params);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get(':id')
  async findOne(@User('sub') account: string, @Param('id') id: string) {
    console.log(account, id);

    try {
      const presentation = await this.presentationsFacade.findOne(id);

      if (!presentation.visible && presentation.account.id !== account) {
        throw new ForbiddenException('Acesso negado');
      }

      return presentation;
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Get(':id/comments')
  async findPresentationComments(
    @User('sub') account: string,
    @Param('id') presentationId: string,
    @Query() params: QueryParamsDto<PresentationComment>
  ) {
    try {
      const presentation = await this.presentationsFacade.findOne(
        presentationId
      );

      if (!presentation.visible && presentation.account.id !== account) {
        throw new ForbiddenException('Acesso negado');
      }

      return await this.presentationsFacade.findComments(
        presentationId,
        params
      );
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Patch(':id')
  async update(
    @User('sub') account: string,
    @Param('id') id: string,
    @Body() updatePresentationDto: UpdatePresentationDto
  ) {
    const presentation = await this.presentationsFacade.findOne(id);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    if (presentation.account.id !== account) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.presentationsFacade.update(id, updatePresentationDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id/comments/:commentId')
  async updateComment(
    @User('sub') account: string,
    @Param('id') presentationId: string,
    @Param('id') commentId: string,
    @Body() updatePresentationCommentDto: UpdatePresentationCommentDto
  ) {
    const presentation = await this.presentationsFacade.findOne(presentationId);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    const comment = await this.presentationsFacade.findOneComment(commentId);

    if (!comment) {
      throw new NotFoundException('Comentário não encontrado');
    }

    if (comment.account.id !== account) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.presentationsFacade.updateComment(
        commentId,
        updatePresentationCommentDto
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  async remove(@User('sub') account: string, @Param('id') id: string) {
    const presentation = await this.presentationsFacade.findOne(id);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    if (presentation.account.id !== account) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.presentationsFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id/comments/:commentId')
  async removeComment(
    @User('sub') account: string,
    @Param('id') presentationId: string,
    @Param('id') commentId: string
  ) {
    const presentation = await this.presentationsFacade.findOne(presentationId);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    const comment = await this.presentationsFacade.findOneComment(commentId);

    if (!comment) {
      throw new NotFoundException('Comentário não encontrado');
    }

    if (comment.account.id !== account) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.presentationsFacade.removeComment(commentId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
