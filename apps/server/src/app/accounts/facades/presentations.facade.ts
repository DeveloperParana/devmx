import { plainToInstance } from 'class-transformer';
import { PresentationsService } from '../services';
import { Presentation, PresentationComment } from '../schemas';
import {
  PageDto,
  PresentationDto,
  QueryParamsDto,
  CreatePresentationDto,
  UpdatePresentationDto,
  PresentationCommentDto,
  CreatedPresentationDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
  CreatedPresentationCommentDto,
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

  async findOne(id: string) {
    const presentation = await this.presentationsService.findOne(id);
    return plainToInstance(PresentationDto, presentation);
  }

  async findOneComment(id: string) {
    const comment = await this.presentationsService.findOneComment(id);
    return plainToInstance(PresentationDto, comment);
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

  async remove(id: string) {
    const presentation = this.presentationsService.remove(id);
    return plainToInstance(PresentationDto, presentation);
  }

  async removeComment(id: string) {
    const comment = this.presentationsService.removeComment(id);
    return plainToInstance(PresentationDto, comment);
  }
}
