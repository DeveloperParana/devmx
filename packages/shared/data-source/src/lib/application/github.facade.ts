import { GithubService } from '@devmx/shared-api-interfaces/server';
import { createServerProvider } from '../utils';

export class GithubFacade {
  constructor(private readonly service: GithubService) {}

  findRepoContributors(repo: string) {
    return this.service.findRepoContributors('DeveloperParana', repo);
  }
}

export function provideGithubFacade() {
  return createServerProvider(GithubFacade, [GithubService]);
}
