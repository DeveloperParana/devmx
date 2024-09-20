import { provideEnv, provideMongoURI } from './shared.providers';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Env } from './models';

@Global()
@Module({})
export class SharedModule {
  static forRoot(env: Env): DynamicModule {
    return {
      module: SharedModule,
      providers: [provideEnv(env), provideMongoURI()],
      exports: [Env, 'MONGO_URI']
    };
  }
}
