import { PresentationResourceModule } from '@devmx/presentation-resource';
import { LocationResourceModule } from '@devmx/location-resource';
import { AccountResourceModule } from '@devmx/account-resource';
import { AcademyResourceModule } from '@devmx/academy-resource';
import { CareerResourceModule } from '@devmx/career-resource';
import { LearnResourceModule } from '@devmx/learn-resource';
import { AlbumResourceModule } from '@devmx/album-resource';
import { EventResourceModule } from '@devmx/event-resource';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { env } from './envs/env';
import {
  SharedDatabaseModule,
  SharedMailerModule,
  SharedGithubModule,
  SharedResourceModule,
} from '@devmx/shared-resource';

@Module({
  imports: [
    ServeStaticModule.forRoot(env.static),
    SharedResourceModule.forRoot(env),
    SharedDatabaseModule,
    SharedMailerModule,
    SharedGithubModule,
    LearnResourceModule,
    AccountResourceModule,
    PresentationResourceModule,
    LocationResourceModule,
    EventResourceModule,
    CareerResourceModule,
    AlbumResourceModule,
    AcademyResourceModule,
  ],
})
export class AppModule {}
