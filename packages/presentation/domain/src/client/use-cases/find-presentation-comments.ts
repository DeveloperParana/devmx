import { QueryByPresentationParams } from '../../lib/dtos';
import { PresentationCommentService } from '../services';
import {
  Page,
  UseCase,
  Presentation,
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
  constructor(private presentationCommentService: PresentationCommentService) {}

  execute({
    presentation,
    ...params
  }: QueryByPresentationParams<Presentation>) {
    return this.presentationCommentService.find(presentation, params);
  }
}
