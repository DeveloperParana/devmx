import { createQueryParams } from '@devmx/shared-util-data';
import { JobService } from '../services';
import {
  Job,
  Page,
  JobOut,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindJobsUseCase
  implements UseCase<QueryParams<Job>, Page<JobOut>>
{
  constructor(private jobService: JobService) {}

  execute(params: QueryParams<Job>) {
    return this.jobService.find(createQueryParams(params));
  }
}
