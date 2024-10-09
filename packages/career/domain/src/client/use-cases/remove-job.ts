import { JobOut, UseCase } from '@devmx/shared-api-interfaces';
import { JobService } from '../services';

export class RemoveJobUseCase implements UseCase<string, JobOut> {
  constructor(private jobService: JobService) {}

  execute(id: string) {
    return this.jobService.remove(id);
  }
}
