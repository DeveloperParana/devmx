import { createServerProvider } from '@devmx/shared-data-source';
import { CreateUser, ValidateUserCode } from '@devmx/account-domain';
import {
  CreateUserUseCase,
  SendUserCodeUseCase,
  AuthenticationUseCase,
} from '@devmx/account-domain/server';

export class AuthenticationFacade {
  constructor(
    private sendUserCodeUseCase: SendUserCodeUseCase,
    private createUserUseCase: CreateUserUseCase,
    private authenticationUseCase: AuthenticationUseCase
  ) {}

  async createUser(data: CreateUser) {
    return await this.createUserUseCase.execute(data);
  }

  async sendUserCode(name: string) {
    return await this.sendUserCodeUseCase.execute(name);
  }

  async validadeUserCode(data: ValidateUserCode) {
    return await this.authenticationUseCase.execute(data);
  }
}

export function provideAuthenticationFacade() {
  return createServerProvider(AuthenticationFacade, [
    SendUserCodeUseCase,
    CreateUserUseCase,
    AuthenticationUseCase,
  ]);
}
