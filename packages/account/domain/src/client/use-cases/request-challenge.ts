import { Challenge, UseCase } from '@devmx/shared-api-interfaces';
import { AuthService } from '../services';

export class RequestChallengeUseCase implements UseCase<void, Challenge> {
  constructor(private authService: AuthService) {}

  execute() {
    return this.authService.challenge();
  }
}
