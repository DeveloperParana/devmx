import { CryptoService } from '@devmx/account-domain/server';
import { hashSync, compareSync } from 'bcrypt';

export class CryptoServiceImpl implements CryptoService {
  hash(value: string, salt = 10) {
    return hashSync(value, salt);
  }

  compare(value: string, encrypted: string) {
    return compareSync(value, encrypted);
  }
}
