import { provideEnv, provideMongoURI } from '@devmx/shared-data-source';
import { Module, Global, DynamicModule } from '@nestjs/common';
import { Env } from '@devmx/shared-api-interfaces/server';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards';

@Global()
@Module({})
export class SharedResourceModule {
  static forRoot(env: Env): DynamicModule {
    return {
      module: SharedResourceModule,
      providers: [
        provideEnv(env),
        provideMongoURI(),
        {
          provide: APP_GUARD,
          useClass: RolesGuard,
        },
      ],
      exports: [Env, 'MONGO_URI'],
    };
  }
}
