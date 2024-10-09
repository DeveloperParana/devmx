import { Job, Page, QueryParams } from '@devmx/shared-api-interfaces';
import { CreateJob } from '../../common/dtos';
import { Observable } from 'rxjs';

export abstract class JobService {
  abstract find(params: QueryParams<Job>): Observable<Page<Job>>;

  abstract findOne(id: string): Observable<Job>;

  abstract create(data: CreateJob): Observable<Job>;

  abstract update(id: string, data: Partial<Job>): Observable<Job>;

  abstract remove(id: string): Observable<Job>;
}
