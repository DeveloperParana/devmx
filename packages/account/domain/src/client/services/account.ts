import { ChangePassword, ChangeRoles, UpdateAccount } from '../../lib/dtos';
import { Observable } from 'rxjs';
import {
  Page,
  JobOut,
  EventOut,
  AccountOut,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class AccountService {
  abstract find(params: URLSearchParams): Observable<Page<AccountOut>>;

  abstract findOne(id: string): Observable<AccountOut>;

  abstract findOneByUsername(username: string): Observable<AccountOut>

  abstract findPresentations(params: URLSearchParams): Observable<Page<PresentationOut>>

  abstract findJobs(params: URLSearchParams): Observable<Page<JobOut>>

  abstract findEvents(params: URLSearchParams): Observable<Page<EventOut>>

  abstract findSpeakers(params: URLSearchParams): Observable<Page<AccountOut>>

  abstract findLeaders(params: URLSearchParams): Observable<Page<AccountOut>>

  abstract update(id: string, data: UpdateAccount): Observable<AccountOut>;

  abstract upload(photo: Blob): Observable<AccountOut>;

  abstract changePassword(data: ChangePassword): Observable<AccountOut>;

  abstract changeRoles(id: string, data: ChangeRoles): Observable<AccountOut>

  abstract remove(id: string): Observable<AccountOut>;
}
