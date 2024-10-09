import { Job, Page, QueryParams, UseCase } from '@devmx/shared-api-interfaces';
import { JobService } from '../services';

export class FindJobsUseCase implements UseCase<QueryParams<Job>, Page<Job>> {
  constructor(private jobService: JobService) {}

  execute(params: QueryParams<Job>) {
    return this.jobService.find(params);
  }
}
