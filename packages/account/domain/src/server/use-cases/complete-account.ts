import { UseCase, FindFilter, AccountRef } from '@devmx/shared-api-interfaces';
import { AccountsService } from '../services';

export class CompleteAccountUseCase implements UseCase<string, AccountRef[]> {
  constructor(private accountsService: AccountsService) {}

  async execute(query: string) {
    const filter: FindFilter<AccountRef> = {
      'name.first': new RegExp(query, 'i'),
      'name.last': new RegExp(query, 'i'),
      username: new RegExp(query, 'i'),
    };

    return this.accountsService.complete(filter);
  }
}
