import { GithubContributor, GithubIssue } from '../../lib/interfaces';
import { Observable } from 'rxjs';

export abstract class GithubService {
  abstract findRepoContributors(repo: string): Observable<GithubContributor[]>;
  abstract findRepoIssues(repo: string): Observable<GithubIssue[]>;
}
