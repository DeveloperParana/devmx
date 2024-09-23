import { PresentationCommentOut, UseCase } from '@devmx/shared-api-interfaces';
import { CreatePresentationComment } from '../dtos';
import { PresentationCommentsService } from '../services';

export class CreatePresentationCommentUseCase
  implements UseCase<CreatePresentationComment, PresentationCommentOut>
{
  constructor(
    private presentationCommentsService: PresentationCommentsService
  ) {}

  execute(data: CreatePresentationComment) {
    return this.presentationCommentsService.create(data);
  }
}
