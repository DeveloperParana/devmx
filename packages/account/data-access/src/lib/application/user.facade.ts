import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { User } from '@devmx/shared-api-interfaces';
import { toAboutUserSchema } from '../mappers';
import { filter, map, take } from 'rxjs';
import {
  FindUsersUseCase,
  DeleteUserUseCase,
  UpdateSocialUseCase,
  FindUserByIDUseCase,
  UpdateProfileUseCase,
  UpdatePasswordUseCase,
  UpdateRolesUseCase,
  FindUserByNameUseCase,
} from '@devmx/account-domain/client';
import {
  UpdateProfile,
  UpdatePassword,
  UpdateSocial,
  UpdateRoles,
} from '@devmx/account-domain';

export class UserFacade extends EntityFacade<User> {
  profile$ = this.select((state) => {
    if (state.selected) {
      const { profile, id } = state.selected;
      return { ...profile, id };
    }

    return null;
  });

  social$ = this.select((state) => {
    if (state.selected) {
      const { social, id } = state.selected;
      return { social, id };
    }

    return null;
  });

  schema$ = this.selected$.pipe(
    filter((selected) => !!selected),
    map((selected) => toAboutUserSchema(selected))
  );

  constructor(
    private findUsersUseCase: FindUsersUseCase,
    private findUserByIDUseCase: FindUserByIDUseCase,
    private updateProfileUseCase: UpdateProfileUseCase,
    private updatePasswordUseCase: UpdatePasswordUseCase,
    private updateSocialUseCase: UpdateSocialUseCase,
    private updateRolesUseCase: UpdateRolesUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private findUserByNameUseCase: FindUserByNameUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: { page: 0, size: 10, filter: { name: '' } },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findUsersUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findUserByIDUseCase.execute(id));
  }

  loadOneByName(name: string) {
    this.onLoadOne(this.findUserByNameUseCase.execute(name));
  }

  updateProfile(data: UpdateProfile) {
    this.updateProfileUseCase.execute(data).pipe(take(1)).subscribe();
  }

  updatePassword(data: UpdatePassword) {
    this.onUpdate(this.updatePasswordUseCase.execute(data));
  }

  updateSocial(data: UpdateSocial) {
    this.updateSocialUseCase.execute(data).pipe(take(1)).subscribe();
  }

  updateRoles(data: UpdateRoles) {
    this.onUpdate(this.updateRolesUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteUserUseCase.execute(id));
  }
}

export function provideUserFacade() {
  return createClientProvider(UserFacade, [
    FindUsersUseCase,
    FindUserByIDUseCase,
    UpdateProfileUseCase,
    UpdatePasswordUseCase,
    UpdateSocialUseCase,
    UpdateRolesUseCase,
    DeleteUserUseCase,
    FindUserByNameUseCase
  ]);
}
