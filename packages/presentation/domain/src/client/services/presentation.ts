import { Observable } from 'rxjs';
import {
  Page,
  QueryParams,
  Presentation,
  PresentationOut,
  CreatePresentation,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class PresentationService {
  abstract find(params: QueryParams<Presentation>): Observable<Page<PresentationOut>>;

  abstract findOne(id: string): Observable<PresentationOut>

  abstract create(presentation: CreatePresentation): Observable<PresentationOut>;

  abstract update(id: string, presentation: Presentation): Observable<PresentationOut>;

  abstract remove(id: string): Observable<PresentationOut>
}
