import { JobOut, UseCase } from '@devmx/shared-api-interfaces';
import { UpdateJob } from '../../common/dtos';
import { JobService } from '../services';

export class UpdateJobUseCase implements UseCase<UpdateJob, JobOut> {
  constructor(private jobService: JobService) {}

  execute(data: UpdateJob) {
    return this.jobService.update(data.id, data);
  }
}
