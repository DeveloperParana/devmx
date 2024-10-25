import { JobOpening, UseCase } from '@devmx/shared-api-interfaces';
import { JobOpeningService } from '../services';

export class DeleteJobOpeningUseCase implements UseCase<string, JobOpening> {
  constructor(private jobOpeningService: JobOpeningService) {}

  execute(id: string) {
    return this.jobOpeningService.delete(id);
  }
}
