import { ClientErrorMap } from './interfaces';
import { RawError } from './raw-error';

export class ClientError<K extends keyof ClientErrorMap> extends RawError<K> {}
