import { ErrorMap } from './interfaces';

export abstract class RawError<K extends keyof ErrorMap> extends Error {
  constructor(
    override message: string,
    public code: K,
    override name: ErrorMap[K]
  ) {
    super(message);
  }
}
