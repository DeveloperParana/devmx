import { GithubController } from './controllers';
import { Module } from '@nestjs/common';
import {
  provideGithubFacade,
  provideGithubService,
} from '@devmx/shared-data-source';

@Module({
  controllers: [GithubController],
  providers: [provideGithubService(), provideGithubFacade()],
})
export class SharedGithubModule {}
