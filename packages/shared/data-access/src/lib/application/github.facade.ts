import { GithubService } from '@devmx/shared-api-interfaces/client';
import { GithubContributor } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-util-data';
import { createClientProvider } from '../utils';
import { take } from 'rxjs';

interface GithubState {
  contributors: GithubContributor[];
}

export class GithubFacade extends State<GithubState> {
  contributors$ = this.select((state) => state.contributors);

  constructor(private githubService: GithubService) {
    super({ contributors: [] });
  }

  loadContributors(repo: string) {
    const request$ = this.githubService.findRepoContributors(repo);

    const onContributors = (contributors: GithubContributor[]) => {
      this.setState({ contributors });
    };

    request$.pipe(take(1)).subscribe(onContributors);
  }
}

export function provideGithubFacade() {
  return createClientProvider(GithubFacade, [GithubService]);
}
