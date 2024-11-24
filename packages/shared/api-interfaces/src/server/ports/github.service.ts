import { GithubContributor } from '../../lib/interfaces';

export abstract class GithubService {
  abstract findRepoContributors(
    owner: string,
    repo: string
  ): Promise<GithubContributor[]>;
}
