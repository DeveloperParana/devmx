import { CryptoService } from '@devmx/account-domain/server';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';

export class CryptoServiceImpl implements CryptoService {
  genSalt() {
    return genSaltSync()
  }

  hash(value: string, salt: string | number = 10) {
    return hashSync(value, salt + '');
  }

  compare(value: string, encrypted: string) {
    return compareSync(value, encrypted);
  }
}
