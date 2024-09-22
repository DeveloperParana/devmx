import { SharedDatabaseModule, SharedResourceModule } from '@devmx/shared-resource';
import { PresentationResourceModule } from '@devmx/presentation-resource';
import { AccountResourceModule } from '@devmx/account-resource';
import { Module } from '@nestjs/common';
import { env } from './envs/env';

@Module({
  imports: [
    SharedResourceModule.forRoot(env),
    SharedDatabaseModule,
    AccountResourceModule,
    PresentationResourceModule,
  ]
})
export class AppModule {}
