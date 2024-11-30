import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { UserService } from '@devmx/account-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { User } from '@devmx/shared-api-interfaces';
import {
  UpdatePassword,
  UpdatePhoto,
  UpdateProfile,
  UpdateRoles,
  UpdateSocial,
} from '@devmx/account-domain';

export class UserHttpServiceImpl
  extends HttpService<User>
  implements UserService
{
  findOneByName(name: string) {
    const url = [this.url, 'about', name];

    return this.http.get<User>(url.join('/'));
  }

  updatePassword(data: UpdatePassword) {
    const url = [this.url, data.id, 'password'];

    return this.http.patch<User>(url.join('/'), data);
  }

  updateProfile(data: UpdateProfile) {
    const url = [this.url, data.id, 'profile'];

    return this.http.patch<User>(url.join('/'), data);
  }

  updatePhoto({id, ...data}: UpdatePhoto) {
    const form = new FormData();
    form.append('photo', data.photo);
    form.append('gender', data.gender ?? '');
    form.append('minibio', data.minibio ?? '');
    form.append('birthday', data.birthday?.toString() ?? '');

    const url = [this.url, id, 'photo'];

    return this.http.post<User>(url.join('/'), form);
  }

  updateSocial(data: UpdateSocial) {
    const url = [this.url, data.id, 'social'];

    return this.http.patch<User>(url.join('/'), data);
  }

  updateRoles(data: UpdateRoles) {
    const url = [this.url, data.id, 'roles'];

    return this.http.patch<User>(url.join('/'), data);
  }
}

export function provideUserHttpService() {
  return {
    provide: UserService,
    useFactory(http: HttpClient, env: Env) {
      return new UserHttpServiceImpl(http, env, 'users');
    },
    deps: [HttpClient, Env],
  };
}
