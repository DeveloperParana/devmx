import { ServerErrorMap } from './interfaces';
import { RawError } from './raw-error';

export class ServerError<K extends keyof ServerErrorMap> extends RawError<K> {}
