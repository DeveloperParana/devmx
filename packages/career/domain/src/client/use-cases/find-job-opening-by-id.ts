import { JobOpening, UseCase } from '@devmx/shared-api-interfaces';
import { JobOpeningService } from '../services';

export class FindJobOpeningByIDUseCase
  implements UseCase<string, JobOpening | null>
{
  constructor(private jobOpeningService: JobOpeningService) {}

  execute(id: string) {
    return this.jobOpeningService.findOne(id);
  }
}
