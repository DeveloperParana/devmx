import { CreatePresentationComment, UpdatePresentationComment } from '../dtos';
import { QueryByPresentationParams } from '../../lib/dtos';
import {
  Page,
  QueryFilter,
  PresentationComment,
  PresentationCommentOut,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class PresentationCommentsService {
  abstract create(data: CreatePresentationComment): Promise<PresentationCommentOut>;

  abstract find(params: QueryByPresentationParams<PresentationComment>): Promise<Page<PresentationCommentOut>>;

  abstract findOne(id: string): Promise<PresentationCommentOut | null>;

  abstract findOneBy(filter: QueryFilter<PresentationComment>): Promise<PresentationCommentOut | null>;

  abstract update(id: string, data: UpdatePresentationComment): Promise<PresentationCommentOut | null>;

  abstract remove(id: string): Promise<PresentationCommentOut | null>;
}
