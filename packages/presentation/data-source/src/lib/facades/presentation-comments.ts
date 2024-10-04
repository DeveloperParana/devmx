import { CreatePresentationCommentDto, PresentationCommentDto } from '../dtos';
import { PresentationComment } from '@devmx/shared-api-interfaces';
import { QueryParamsDto } from '@devmx/shared-data-source';
import { plainToInstance } from 'class-transformer';
import {
  CreatePresentationCommentUseCase,
  FindPresentationCommentsUseCase,
} from '@devmx/presentation-domain/server';

export class PresentationCommentsFacade {
  constructor(
    private createPresentationCommentUseCase: CreatePresentationCommentUseCase,
    private findPresentationCommentsUseCase: FindPresentationCommentsUseCase
  ) {}

  async create(data: CreatePresentationCommentDto) {
    const comment = await this.createPresentationCommentUseCase.execute(data);
    return plainToInstance(PresentationCommentDto, comment);
  }

  async find(
    presentation: string,
    params: QueryParamsDto<PresentationComment>
  ) {
    const value = { ...params, presentation };
    const comment = await this.findPresentationCommentsUseCase.execute(value);
    return plainToInstance(PresentationCommentDto, comment);
  }
}
