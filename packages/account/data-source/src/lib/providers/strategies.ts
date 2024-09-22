import { Env } from '@devmx/shared-api-interfaces/server';
import { JwtStrategy } from '../strategies';

export function provideJwtStrategy() {
  return {
    provide: JwtStrategy,
    useFactory(env: Env) {
      return new JwtStrategy(env);
    },
    inject: [Env],
  };
}
