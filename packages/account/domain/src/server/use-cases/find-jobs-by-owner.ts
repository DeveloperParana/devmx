import { Job, JobOut, Page, UseCase } from '@devmx/shared-api-interfaces';
import { JobsService } from '@devmx/career-domain/server';
import { QueryByOwnerParams } from '../dtos';

export class FindJobsByOwnerUseCase
  implements UseCase<QueryByOwnerParams<JobOut>, Page<Job>>
{
  constructor(private jobsService: JobsService) {}

  execute({ owner, ...params }: QueryByOwnerParams<JobOut>) {
    return this.jobsService.findByOwner(owner, params);
  }
}
