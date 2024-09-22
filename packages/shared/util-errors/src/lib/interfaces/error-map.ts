import { ClientErrorMap } from './client-error-map';
import { ServerErrorMap } from './server-error-map';

export type ErrorMap = ClientErrorMap & ServerErrorMap;
