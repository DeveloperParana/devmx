import { QueryByPresentationParams } from '../../lib/dtos';
import { PresentationCommentsService } from '../services';
import {
  Page,
  UseCase,
  PresentationComment,
  PresentationCommentOut,
} from '@devmx/shared-api-interfaces';

export class FindPresentationCommentsUseCase
  implements
    UseCase<
      QueryByPresentationParams<PresentationComment>,
      Page<PresentationCommentOut>
    >
{
  constructor(
    private presentationCommentsService: PresentationCommentsService
  ) {}

  execute(params: QueryByPresentationParams<PresentationComment>) {
    return this.presentationCommentsService.find(params);
  }
}
