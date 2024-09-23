import { CreatePresentationComment, UpdatePresentationComment } from '../dtos';
import { Observable } from 'rxjs';
import {
  Page,
  QueryParams,
  PresentationComment,
  PresentationCommentOut,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class PresentationCommentService {
  abstract find(presentation: string, params: QueryParams<PresentationComment>): Observable<Page<PresentationCommentOut>>;

  abstract findOne(id: string): Observable<PresentationCommentOut>;

  abstract create(data: CreatePresentationComment): Observable<PresentationCommentOut>;

  abstract update(id: string, data: UpdatePresentationComment): Observable<PresentationCommentOut>;

  abstract remove(id: string): Observable<PresentationCommentOut>;
}
