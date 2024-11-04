export abstract class CryptoService {
  abstract genSalt(): string

  abstract hash(value: string, salt?: string | number): string;

  abstract compare(value: string, encrypted: string): boolean;
}
