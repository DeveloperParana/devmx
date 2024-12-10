import { Env, GithubService } from '@devmx/shared-api-interfaces/server';
import { GithubContributor, GithubIssue } from '@devmx/shared-api-interfaces';
import { createServiceProvider } from '../utils';

export class GithubServiceImpl implements GithubService {
  #api = 'https://api.github.com';

  constructor(private readonly env: Env) {}

  async findRepoContributors(
    owner: string,
    repo: string
  ): Promise<GithubContributor[]> {
    const url = `${this.#api}/repos/${owner}/${repo}/contributors`;

    const Authorization = `token ${this.env.github.token}`;
    const Accept = 'application/vnd.github.v3+json';
    const headers = { Authorization, Accept };

    const request = await fetch(url, { headers });

    return request.json();
  }

  async findRepoIssues(owner: string, repo: string): Promise<GithubIssue[]> {
    const url = `${this.#api}/repos/${owner}/${repo}/issues`;

    const Authorization = `token ${this.env.github.token}`;
    const Accept = 'application/vnd.github.v3+json';
    const headers = {
      Authorization,
      Accept,
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const request = await fetch(url, { headers });

    return request.json();
  }
}

export function provideGithubService() {
  return createServiceProvider(GithubService, GithubServiceImpl, [Env]);
}
