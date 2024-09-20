import { Env } from './models';

export function provideEnv(env: Env) {
  return {
    provide: Env,
    useValue: env,
  };
}

export function provideMongoURI() {
  return {
    provide: 'MONGO_URI',
    useFactory(env: Env) {
      const { user, pass, host, port, name } = env.db;
      return `mongodb://${user}:${pass}@${host}:${port}/${name}?authSource=admin`;
    },
    inject: [Env],
  };
}
