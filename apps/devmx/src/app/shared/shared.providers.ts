import { Env } from './models/env';

export function provideEnv(env: Env) {
  return {
    provide: Env,
    useValue: env,
  };
}
