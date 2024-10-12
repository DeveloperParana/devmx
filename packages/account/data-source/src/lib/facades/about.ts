import { FindAboutAccountUseCase } from '@devmx/account-domain/server';
import { plainToInstance } from 'class-transformer';
import { AccountDto } from '../dtos';

export class AboutFacade {
  constructor(private findAboutAccountUseCase: FindAboutAccountUseCase) {}

  async findAboutAccount(username: string) {
    const account = await this.findAboutAccountUseCase.execute(username);
    return plainToInstance(AccountDto, account);
  }
}
