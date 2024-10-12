import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { AboutService } from '../services';

export class FindAboutAccountUseCase implements UseCase<string, AccountOut> {
  constructor(private accountService: AboutService) {}

  execute(username: string) {
    return this.accountService.findAccount(username);
  }
}
