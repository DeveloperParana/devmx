import { Job, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { JobsService } from '../services';

export class FindJobByIDUseCase implements UseCase<string, Job> {
  constructor(private jobsService: JobsService) {}

  async execute(id: string) {
    const job = await this.jobsService.findOne(id);

    if (!job) {
      throw new NotFoundError(`Oferta não encontrada`);
    }

    return job;
  }
}
