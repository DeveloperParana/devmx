import { Env, GithubService } from '@devmx/shared-api-interfaces/client';
import { GithubContributor, GithubIssue } from '@devmx/shared-api-interfaces';
import { HttpClient } from '../ports';
import { createServiceProvider } from '../utils';

export class HttpGithubServiceImpl implements GithubService {
  constructor(private readonly http: HttpClient, private env: Env) {}

  findRepoContributors(repo: string) {
    const url = `${this.env.api.url}/github/contributors/${repo}`;
    return this.http.get<GithubContributor[]>(url);
  }

  findRepoIssues(repo: string) {
    const url = `${this.env.api.url}/github/issues/${repo}`;
    return this.http.get<GithubIssue[]>(url);
  }
}

export function provideHttpGithubService() {
  return createServiceProvider(GithubService, HttpGithubServiceImpl, [
    HttpClient,
    Env,
  ]);
}
