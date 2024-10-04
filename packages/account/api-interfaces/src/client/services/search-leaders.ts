import { AccountOut, Page } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class SearchLeadersService {
  abstract search(params: URLSearchParams): Observable<Page<AccountOut>>;
}
