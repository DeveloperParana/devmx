import { Account, SignUp, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { AccountsService } from '../services';
import { CryptoService } from '../ports';

export class SignUpUseCase implements UseCase<SignUp, Account> {
  constructor(
    private accountsService: AccountsService,
    private cryptoService: CryptoService
  ) {}

  async execute(data: SignUp) {
    const password = this.cryptoService.hash(data.password);
    const value = { ...data, password, active: true };
    const created = await this.accountsService.create(value);

    if (!created) {
      throw new PersistenceError(
        'Algo deu errado ao persistir os dados do usuário'
      );
    }

    return created;
  }
}
