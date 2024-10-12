import { AccountOut } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class AboutService {
  abstract findAccount(username: string): Observable<AccountOut>;
}
