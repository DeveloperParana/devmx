import { SignInUseCase, SignUpUseCase } from '@devmx/account-domain/server';
import { ChallengeDto, SignInDto, SignUpDto } from '../dtos';
import { server } from '@devmx/shared-util-authn/server';

export class AuthFacade {
  constructor(
    private signInUseCase: SignInUseCase,
    private signUpUseCase: SignUpUseCase
  ) {}

  challenge() {
    return new ChallengeDto(server.randomChallenge());
  }

  async signIn(data: SignInDto) {
    return await this.signInUseCase.execute(data);
  }

  async signUp(data: SignUpDto) {
    await this.signUpUseCase.execute(data);
    return this.signIn(data);
  }
}
