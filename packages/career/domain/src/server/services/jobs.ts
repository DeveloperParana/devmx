import { CreateJob } from '../../common/dtos';
import {
  Job,
  Page,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export abstract class JobsService {
  abstract create(data: CreateJob): Promise<Job>;

  abstract find(params: QueryParams<Job>): Promise<Page<Job>>;

  abstract findOne(id: string): Promise<Job | null>;

  abstract findOneBy(filter: QueryFilter<Job>): Promise<Job | null>;

  abstract update(id: string, data: Partial<Job>): Promise<Job | null>;

  abstract remove(id: string): Promise<Job | null>;
}
