import { SignInUseCase, SignUpUseCase } from '@devmx/account-domain/server';
import { SignInDto, SignUpDto } from '../dtos';

export class AuthFacade {
  constructor(
    private signInUseCase: SignInUseCase,
    private signUpUseCase: SignUpUseCase
  ) {}

  async signIn(data: SignInDto) {
    return await this.signInUseCase.execute(data);
  }

  async signUp(data: SignUpDto) {
    await this.signUpUseCase.execute(data);
    return this.signIn(data);
  }
}
