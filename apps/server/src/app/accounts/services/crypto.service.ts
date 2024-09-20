export abstract class CryptoService {
  abstract hash(value: string, salt?: number): string;
  abstract compare(value: string, encrypted: string): boolean;
}
