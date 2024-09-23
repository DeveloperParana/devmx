import { ChangePassword, UpdateAccount } from '@devmx/account-domain';
import { AccountService } from '@devmx/account-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import {
  Page,
  AccountOut,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class AccountServiceImpl implements AccountService {
  get url() {
    return `${this.env.api.url}/accounts`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  find(params: URLSearchParams) {
    const url = [this.url, params.toString()];
    return this.http.get<Page<AccountOut>>(url.join('?'));
  }

  findPresentations(params: URLSearchParams) {
    const url = [`${this.url}/presentations`, params.toString()];
    return this.http.get<Page<PresentationOut>>(url.join('?'));
  }

  findOne(id: string) {
    return this.http.get<AccountOut>(`${this.url}/${id}`);
  }

  update(id: string, presentation: UpdateAccount) {
    return this.http.patch<AccountOut>(`${this.url}/${id}`, presentation);
  }

  upload(photo: Blob) {
    const data = new FormData()
    data.append('photo', photo)
    const url = `${this.url}/photo`
    return this.http.post<AccountOut>(url, data)
  }

  changePassword(data: ChangePassword) {
    return this.http.patch<AccountOut>(`${this.url}/password`, data);
  }

  remove(id: string) {
    return this.http.delete<AccountOut>(`${this.url}/${id}`);
  }
}
