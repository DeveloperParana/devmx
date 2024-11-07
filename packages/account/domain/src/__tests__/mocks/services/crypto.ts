import { CryptoService } from '../../../server';

export class CryptoServiceMock implements CryptoService {
  #salt = 0;

  genSalt(): string {
    return '';
  }

  hash(value: string, salt = 10): string {
    this.#salt = salt;
    return atob(value + salt);
  }

  compare(value: string, encrypted: string): boolean {
    return value === btoa(encrypted + this.#salt);
  }
}
