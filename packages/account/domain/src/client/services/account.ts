import { ChangePassword, UpdateAccount } from '../../lib/dtos';
import { Observable } from 'rxjs';
import {
  Page,
  AccountOut,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class AccountService {
  abstract find(params: URLSearchParams): Observable<Page<AccountOut>>;

  abstract findOne(id: string): Observable<AccountOut>;

  abstract findOneByUsername(username: string): Observable<AccountOut>

  abstract findPresentations(params: URLSearchParams): Observable<Page<PresentationOut>>

  abstract update(id: string, data: UpdateAccount): Observable<AccountOut>;

  abstract upload(photo: Blob): Observable<AccountOut>;

  abstract changePassword(data: ChangePassword): Observable<AccountOut>;

  abstract remove(id: string): Observable<AccountOut>;
}
