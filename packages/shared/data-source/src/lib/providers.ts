import { Env } from '@devmx/shared-api-interfaces/server';

export function provideEnv(env: Env) {
  return { provide: Env, useValue: env };
}

export function provideMongoURI() {
  return {
    provide: 'MONGO_URI',
    useFactory(env: Env) {
      const { user, pass, host, port, name, } = env.db;
      const { uri } = env.mongo;

      if (env.production) {
        return `${uri}`;
      }

      return `mongodb://${user}:${pass}@${host}:${port}/${name}?authSource=admin`;
    },
    inject: [Env],
  };
}
