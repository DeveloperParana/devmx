import { createServiceProvider } from '@devmx/shared-data-source';
import { Env } from '@devmx/shared-api-interfaces/server';
import { getModelToken } from '@nestjs/mongoose';
import { AccountSchema } from '../schemas';
import {
  AuthServiceImpl,
  CryptoServiceImpl,
  AccountsServiceImpl,
} from '../services';
import {
  JwtService,
  AuthService,
  CryptoService,
  AccountsService,
} from '@devmx/account-domain/server';

export function provideCryptoService() {
  return {
    provide: CryptoService,
    useClass: CryptoServiceImpl,
  };
}

export function provideJwtService<T>(JwtServiceImpl: T) {
  return {
    provide: JwtService,
    useClass: JwtServiceImpl,
  };
}

export function provideAccountsService() {
  return createServiceProvider(AccountsService, AccountsServiceImpl, [
    getModelToken(AccountSchema.name),
  ]);
}

export function provideAuthService() {
  return createServiceProvider(AuthService, AuthServiceImpl, [
    AccountsService,
    CryptoService,
    JwtService,
    Env,
  ]);
}
// export function provideAccountsService() {
//   return {
//     provide: AccountsService,
//     useFactory(model: Model<Account>) {
//       return new AccountsServiceImpl(model);
//     },
//     inject: [getModelToken(AccountSchema.name)],
//   };
// }
