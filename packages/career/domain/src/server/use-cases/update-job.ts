import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { Job, Findable, UseCase } from '@devmx/shared-api-interfaces';
import { JobsService } from '../services';

export class UpdateJobUseCase implements UseCase<Findable<Job>, Job> {
  constructor(private jobsService: JobsService) {}

  async execute(data: Findable<Job>) {
    const job = await this.jobsService.findOne(data.id);

    if (!job) {
      throw new NotFoundError(`Oferta não encontrada`);
    }

    const updated = await this.jobsService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados da oferta`
      );
    }

    return updated;
  }
}
