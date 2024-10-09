import { Job, JobOut, Page, QueryParams } from '@devmx/shared-api-interfaces';
import { CreateJob } from '../../common/dtos';
import { Observable } from 'rxjs';

export abstract class JobService {
  abstract find(params: QueryParams<Job>): Observable<Page<JobOut>>;

  abstract findOne(id: string): Observable<JobOut>;

  abstract create(data: CreateJob): Observable<JobOut>;

  abstract update(id: string, data: Partial<Job>): Observable<Job>;

  abstract remove(id: string): Observable<Job>;
}
