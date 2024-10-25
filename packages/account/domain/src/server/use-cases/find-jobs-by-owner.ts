import { Job, JobOut, Page, UseCase } from '@devmx/shared-api-interfaces';
import { JobOpeningsService } from '@devmx/career-domain/server';
import { QueryByOwnerParams } from '../dtos';

export class FindJobsByOwnerUseCase
  implements UseCase<QueryByOwnerParams<JobOut>, Page<Job>>
{
  constructor(private jobsService: JobOpeningsService) {}

  execute({ owner, ...params }: QueryByOwnerParams<JobOut>) {
    params.filter = {...params.filter, owner }
    return this.jobsService.find(params);
  }
}
