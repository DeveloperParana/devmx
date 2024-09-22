import { Observable } from 'rxjs';
import {
  Page,
  QueryParams,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export abstract class PresentationService {
  abstract findPresentations(
    params: QueryParams<Presentation>
  ): Observable<Page<PresentationOut>>;

  abstract create(presentation: Presentation): Observable<PresentationOut>;

  abstract update(
    id: string,
    presentation: Presentation
  ): Observable<PresentationOut>;
}
