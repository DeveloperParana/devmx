import { CreateJob, UpdateJob } from '@devmx/career-domain';
import { Page, JobOut } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { JobService } from '@devmx/career-domain/client';
import { HttpClient } from '@devmx/shared-data-access';

export class JobServiceImpl implements JobService {
  get url() {
    return `${this.env.api.url}/careers`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  find(params: URLSearchParams) {
    const url = [this.url, params.toString()];
    return this.http.get<Page<JobOut>>(url.join('?'));
  }

  findOne(id: string) {
    return this.http.get<JobOut>(`${this.url}/${id}`);
  }

  create(data: CreateJob) {
    return this.http.post<JobOut>(this.url, data);
  }

  update(id: string, data: UpdateJob) {
    return this.http.patch<JobOut>(`${this.url}/${id}`, data);
  }

  remove(id: string) {
    return this.http.delete<JobOut>(`${this.url}/${id}`);
  }
}
