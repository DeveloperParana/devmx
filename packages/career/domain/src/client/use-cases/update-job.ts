import { Job, UseCase } from '@devmx/shared-api-interfaces';
import { JobService } from '../services';

export class UpdateJobUseCase implements UseCase<Job, Job> {
  constructor(private jobService: JobService) {}

  execute(data: Job) {
    return this.jobService.update(data.id, data);
  }
}
