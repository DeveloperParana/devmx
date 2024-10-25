import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { JobOpeningsService } from '../services';
import {
  UseCase,
  JobOpening,
  EditableJobOpening,
} from '@devmx/shared-api-interfaces';

export class UpdateJobOpeningUseCase
  implements UseCase<EditableJobOpening, JobOpening>
{
  constructor(private jobsService: JobOpeningsService) {}

  async execute(data: EditableJobOpening) {
    const job = await this.jobsService.findOne(data.id);

    if (!job) {
      throw new NotFoundError(`Oferta não encontrada`);
    }

    const updated = await this.jobsService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados da vaga`
      );
    }

    return updated;
  }
}
