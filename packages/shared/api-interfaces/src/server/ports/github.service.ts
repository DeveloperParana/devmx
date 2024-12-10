import { GithubContributor, GithubIssue } from '../../lib/interfaces';

export abstract class GithubService {
  abstract findRepoContributors(
    owner: string,
    repo: string
  ): Promise<GithubContributor[]>;

  abstract findRepoIssues(owner: string, repo: string): Promise<GithubIssue[]>;
}
