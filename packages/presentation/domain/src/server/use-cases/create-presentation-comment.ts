import { PresentationCommentOut, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationCommentsService } from '../services';
import { CreatePresentationComment } from '../dtos';

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
