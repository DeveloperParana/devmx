import { Env } from '@devmx/shared-api-interfaces/server';

export function provideEnv(env: Env) {
  return { provide: Env, useValue: env };
}

export function provideMongoURI() {
  return {
    provide: 'MONGO_URI',
    useFactory(env: Env) {
      const { user, pass, host, port, name } = env.db;

      if (env.production) {
        return `mongodb+srv://${user}:${pass}@${host}/?retryWrites=true&w=majority&appName=${name}`;
      }

      return `mongodb://${user}:${pass}@${host}:${port}/${name}?authSource=admin`;
    },
    inject: [Env],
  };
}
