import { Job, UseCase } from '@devmx/shared-api-interfaces';
import { CreateJob } from '../../common/dtos';
import { JobsService } from '../services';

export class CreateJobUseCase implements UseCase<CreateJob, Job> {
  constructor(private readonly jobsService: JobsService) {}

  execute(data: CreateJob) {
    return this.jobsService.create(data);
  }
}
