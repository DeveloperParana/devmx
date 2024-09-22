import { AuthUser, UseCase } from '@devmx/shared-api-interfaces';
import { AuthService } from '../services';

export class LoadAuthUserUseCase implements UseCase<void, AuthUser> {
  constructor(private authService: AuthService) {}

  execute() {
    return this.authService.auth();
  }
}
