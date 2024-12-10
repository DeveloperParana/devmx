import { GithubContributor, GithubIssue } from '@devmx/shared-api-interfaces';
import { GithubService } from '@devmx/shared-api-interfaces/client';
import { State } from '@devmx/shared-util-data';
import { createClientProvider } from '../utils';
import { take } from 'rxjs';

interface GithubState {
  contributors: GithubContributor[];
  issues: GithubIssue[];
}

export class GithubFacade extends State<GithubState> {
  contributors$ = this.select((state) => state.contributors);

  issues$ = this.select((state) => state.issues);

  constructor(private githubService: GithubService) {
    super({ contributors: [], issues: [] });
  }

  loadContributors(repo: string) {
    const request$ = this.githubService.findRepoContributors(repo);

    const onContributors = (contributors: GithubContributor[]) => {
      this.setState({ contributors });
    };

    request$.pipe(take(1)).subscribe(onContributors);
  }

  loadIssues(repo: string) {
    const request$ = this.githubService.findRepoIssues(repo);

    const onIssues = (issues: GithubIssue[]) => {
      this.setState({ issues });
    };

    request$.pipe(take(1)).subscribe(onIssues);
  }
}

export function provideGithubFacade() {
  return createClientProvider(GithubFacade, [GithubService]);
}
