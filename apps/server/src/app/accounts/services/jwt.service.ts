export interface JwtVerifyOptions {
  secret?: string;
  publicKey?: string;
}

export abstract class JwtService {
  abstract sign<T>(value: T, options?: JwtVerifyOptions): string;

  abstract signAsync<T>(value: T, options?: JwtVerifyOptions): Promise<string>;

  abstract verify<T extends object>(
    token: string,
    options?: JwtVerifyOptions
  ): T;

  abstract verifyAsync<T>(
    token: string,
    options?: JwtVerifyOptions
  ): Promise<T>;
}
