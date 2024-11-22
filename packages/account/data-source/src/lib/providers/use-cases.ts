import { Env, MailerService } from '@devmx/shared-api-interfaces/server';
import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  JwtService,
  CryptoService,
  SendUserCodeUseCase,
  UsersService,
  CreateUserUseCase,
  AuthenticationUseCase,
  UpdatePasswordUseCase,
  UpdateProfileUseCase,
  UpdateSocialUseCase,
  FindUsersUseCase,
  FindUserByIDUseCase,
  DeleteUserUseCase,
  UpdateRolesUseCase,
} from '@devmx/account-domain/server';

export function provideSendUserCodeUseCase() {
  return createUseCaseProvider(SendUserCodeUseCase, [
    UsersService,
    MailerService,
    Env
  ]);
}

export function provideCreateUserUseCase() {
  return createUseCaseProvider(CreateUserUseCase, [UsersService]);
}

export function provideAuthenticationUseCase() {
  return createUseCaseProvider(AuthenticationUseCase, [
    UsersService,
    JwtService,
    Env,
  ]);
}

export function provideFindUsersUseCase() {
  return createUseCaseProvider(FindUsersUseCase, [UsersService]);
}

export function provideFindUserByIDUseCase() {
  return createUseCaseProvider(FindUserByIDUseCase, [UsersService]);
}

export function provideDeleteUserUseCase() {
  return createUseCaseProvider(DeleteUserUseCase, [UsersService]);
}

export function provideUpdatePasswordUseCase() {
  return createUseCaseProvider(UpdatePasswordUseCase, [
    UsersService,
    CryptoService,
    Env,
  ]);
}

export function provideUpdateProfileUseCase() {
  return createUseCaseProvider(UpdateProfileUseCase, [UsersService]);
}

export function provideUpdateSocialUseCase() {
  return createUseCaseProvider(UpdateSocialUseCase, [UsersService]);
}

export function provideUpdateRolesUseCase() {
  return createUseCaseProvider(UpdateRolesUseCase, [UsersService]);
}

export function provideUseCases() {
  return [
    provideSendUserCodeUseCase(),
    provideCreateUserUseCase(),
    provideAuthenticationUseCase(),

    provideFindUsersUseCase(),
    provideFindUserByIDUseCase(),
    provideDeleteUserUseCase(),
    provideUpdatePasswordUseCase(),
    provideUpdateProfileUseCase(),
    provideUpdateSocialUseCase(),
    provideUpdateRolesUseCase(),
  ];
}
