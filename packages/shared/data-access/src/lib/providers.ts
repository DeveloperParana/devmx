import { Env } from './envs';
import { HttpClient } from './ports';

export function provideEnv(env: Env) {
  return {
    provide: Env,
    useValue: env,
  };
}

export function provideHttpClientImpl<T>(HttpClientImpl: T) {
  return {
    provide: HttpClient,
    useClass: HttpClientImpl,
  };
}
