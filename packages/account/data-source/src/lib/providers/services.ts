import { provideUsersMongoService } from '../infrastructure';
import { JwtService, CryptoService } from '@devmx/account-domain/server';
import { Type } from '@devmx/shared-api-interfaces';
import { provideJwtStrategy } from './strategies';
import { CryptoServiceImpl } from '../services';

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

export function provideServices<T>(jwtService: Type<T>) {
  return [
    provideCryptoService(),
    provideJwtService(jwtService),
    provideJwtStrategy(),
    provideUsersMongoService(),
  ];
}
