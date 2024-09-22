import { User, QueryFilterDto, QueryParamsDto, ApiPage } from '../../shared';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PresentationsFacade } from '../facades';
import {
  Presentation,
  PresentationComment,
  PresentationReaction,
} from '../schemas';
import {
  CreatePresentationDto,
  UpdatePresentationDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
  CreatePresentationReactionDto,
  UpdatePresentationReactionDto,
  PresentationDto,
  PresentationCommentDto,
  CreatedPresentationDto,
  CreatedPresentationCommentDto,
  CreatedPresentationReactionDto,
  PresentationReactionDto,
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
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';

@ApiBearerAuth()
@ApiTags('Presentations')
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
      throw new BadRequestException(err);
    }
  }

  @Post(':id/comments')
  @ApiOkResponse({ type: CreatedPresentationCommentDto })
  async createComment(
    @User('id') account: string,
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

  @Post(':id/reactions')
  @ApiOkResponse({ type: CreatedPresentationReactionDto })
  async createReaction(
    @User('id') account: string,
    @Param('id') presentation: string,
    @Body() createPresentationReactionDto: CreatePresentationReactionDto
  ) {
    try {
      return await this.presentationsFacade.createReaction({
        ...createPresentationReactionDto,
        presentation,
        account,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get()
  @ApiPage(PresentationDto)
  async findAll(@Query() params: QueryParamsDto<Presentation>) {
    try {
      return await this.presentationsFacade.find(params);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: PresentationDto })
  async findOne(@User('id') account: string, @Param('id') id: string) {
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
  @ApiPage(PresentationCommentDto)
  async findPresentationComments(
    @User('id') account: string,
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

  @Get(':id/reactions')
  async findPresentationReactions(
    @User('id') account: string,
    @Param('id') presentationId: string,
    @Query() params: QueryFilterDto<PresentationReaction>
  ) {
    try {
      const presentation = await this.presentationsFacade.findOne(
        presentationId
      );

      if (!presentation.visible && presentation.account.id !== account) {
        throw new ForbiddenException('Acesso negado');
      }

      return await this.presentationsFacade.findReactions(
        presentationId,
        params
      );
    } catch (err) {
      throw new NotFoundException(err);
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
  @ApiOkResponse({ type: PresentationCommentDto })
  async updateComment(
    @User('id') account: string,
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

  @Patch(':id/reactions/:reactionId')
  @ApiOkResponse({ type: PresentationReactionDto })
  async updateReaction(
    @User('id') account: string,
    @Param('id') presentationId: string,
    @Param('id') reactionId: string,
    @Body() updatePresentationReactionDto: UpdatePresentationReactionDto
  ) {
    const presentation = await this.presentationsFacade.findOne(presentationId);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    const reaction = await this.presentationsFacade.findOneReaction(reactionId);

    if (!reaction) {
      throw new NotFoundException('Reação não encontrada');
    }

    if (reaction.account.id !== account) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.presentationsFacade.updateReaction(
        reactionId,
        updatePresentationReactionDto
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: PresentationDto })
  async remove(@User('id') account: string, @Param('id') id: string) {
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
  @ApiOkResponse({ type: PresentationCommentDto })
  async removeComment(
    @User('id') account: string,
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

  @Delete(':id/reactions/:reactionId')
  @ApiOkResponse({ type: PresentationReactionDto })
  async removeReaction(
    @User('id') account: string,
    @Param('id') presentationId: string,
    @Param('id') reactionId: string
  ) {
    const presentation = await this.presentationsFacade.findOne(presentationId);

    if (!presentation) {
      throw new NotFoundException('Apresentação não encontrada');
    }

    const reaction = await this.presentationsFacade.findOneReaction(reactionId);

    if (!reaction) {
      throw new NotFoundException('Reação não encontrada');
    }

    if (reaction.account.id !== account) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.presentationsFacade.removeReaction(reactionId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
