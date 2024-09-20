import { PageDto, QueryParamsDto } from '../../shared/dtos';
import { plainToInstance } from 'class-transformer';
import { PresentationsService } from '../services';
import {
  Presentation,
  PresentationComment,
  PresentationReaction,
} from '../schemas';
import {
  PresentationDto,
  CreatePresentationDto,
  UpdatePresentationDto,
  PresentationCommentDto,
  CreatedPresentationDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
  CreatedPresentationCommentDto,
  CreatePresentationReactionDto,
  CreatedPresentationReactionDto,
  PresentationReactionDto,
  UpdatePresentationReactionDto,
} from '../dtos';

export class PresentationsFacade {
  constructor(private readonly presentationsService: PresentationsService) {}

  async create(createPresentationDto: CreatePresentationDto) {
    const presentation = await this.presentationsService.create(
      createPresentationDto
    );
    return plainToInstance(CreatedPresentationDto, presentation);
  }

  async createComment(
    createPresentationCommentDto: CreatePresentationCommentDto
  ) {
    const comment = await this.presentationsService.createComment(
      createPresentationCommentDto
    );
    return plainToInstance(CreatedPresentationCommentDto, comment);
  }

  async createReaction(
    createPresentationReactionDto: CreatePresentationReactionDto
  ) {
    const comment = await this.presentationsService.createReaction(
      createPresentationReactionDto
    );
    return plainToInstance(CreatedPresentationReactionDto, comment);
  }

  async find(params: QueryParamsDto<Presentation>) {
    params.filter = { ...params.filter, visible: true };
    const { data, items, pages } = await this.presentationsService.find(params);
    const presentations = plainToInstance(PresentationDto, data);
    return new PageDto(presentations, items, pages);
  }

  async findComments(
    presentationId: string,
    params: QueryParamsDto<PresentationComment>
  ) {
    params.filter = { ...params.filter, presentation: presentationId };
    const { data, items, pages } = await this.presentationsService.findComments(
      params
    );
    const comments = plainToInstance(PresentationCommentDto, data);
    return new PageDto(comments, items, pages);
  }

  async findReactions(
    presentationId: string,
    params: QueryParamsDto<PresentationReaction>
  ) {
    params.filter = { ...params.filter, presentation: presentationId };
    const data = await this.presentationsService.findReactions(params);
    return plainToInstance(PresentationReactionDto, data);
  }

  async findOne(id: string) {
    const presentation = await this.presentationsService.findOne(id);
    return plainToInstance(PresentationDto, presentation);
  }

  async findOneComment(id: string) {
    const comment = await this.presentationsService.findOneComment(id);
    return plainToInstance(PresentationCommentDto, comment);
  }

  async findOneReaction(id: string) {
    const reaction = await this.presentationsService.findOneReaction(id);
    return plainToInstance(PresentationReactionDto, reaction);
  }

  async update(id: string, updatePresentationDto: UpdatePresentationDto) {
    const presentation = await this.presentationsService.update(
      id,
      updatePresentationDto
    );
    return plainToInstance(PresentationDto, presentation);
  }

  async updateComment(
    id: string,
    updatePresentationCommentDto: UpdatePresentationCommentDto
  ) {
    const comment = await this.presentationsService.updateComment(
      id,
      updatePresentationCommentDto
    );
    return plainToInstance(PresentationCommentDto, comment);
  }

  async updateReaction(
    id: string,
    updatePresentationReactionDto: UpdatePresentationReactionDto
  ) {
    const reaction = await this.presentationsService.updateReaction(
      id,
      updatePresentationReactionDto
    );
    return plainToInstance(PresentationReactionDto, reaction);
  }

  async remove(id: string) {
    const presentation = this.presentationsService.remove(id);
    return plainToInstance(PresentationDto, presentation);
  }

  async removeComment(id: string) {
    const comment = this.presentationsService.removeComment(id);
    return plainToInstance(PresentationCommentDto, comment);
  }

  async removeReaction(id: string) {
    const reaction = this.presentationsService.removeReaction(id);
    return plainToInstance(PresentationReactionDto, reaction);
  }
}
