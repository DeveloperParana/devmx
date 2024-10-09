import { Job, UseCase } from '@devmx/shared-api-interfaces';
import { CreateJob } from '../../common/dtos';
import { JobService } from '../services';

export class CreateJobUseCase implements UseCase<CreateJob, Job> {
  constructor(private jobService: JobService) {}

  execute(data: CreateJob) {
    return this.jobService.create(data);
  }
}
