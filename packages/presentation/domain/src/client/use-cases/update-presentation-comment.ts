import { PresentationCommentOut, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationCommentService } from '../services';
import { UpdatePresentationComment } from '../dtos';

export class UpdatePresentationCommentUseCase
  implements UseCase<UpdatePresentationComment, PresentationCommentOut>
{
  constructor(private presentationCommentService: PresentationCommentService) {}

  execute(data: UpdatePresentationComment) {
    return this.presentationCommentService.update(data.id, data);
  }
}
