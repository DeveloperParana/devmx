import { Authentication, UseCase } from '@devmx/shared-api-interfaces';
import { AuthenticationService } from '../services';

export class LoadAuthenticationUseCase
  implements UseCase<void, Authentication>
{
  constructor(private authenticationService: AuthenticationService) {}

  execute() {
    return this.authenticationService.load();
  }
}
