import { provideEnv, provideMongoURI } from '@devmx/shared-data-source';
import { Module, Global, DynamicModule } from '@nestjs/common';
import { Env } from '@devmx/shared-api-interfaces/server';

@Global()
@Module({ })
export class SharedResourceModule {
  static forRoot(env: Env): DynamicModule {
    return {
      module: SharedResourceModule,
      providers: [provideEnv(env), provideMongoURI()],
      exports: [Env, 'MONGO_URI']
    };
  }
}
