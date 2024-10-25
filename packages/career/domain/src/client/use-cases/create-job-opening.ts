import { JobOpeningService } from '../services';
import {
  UseCase,
  JobOpening,
  EditableJobOpening,
} from '@devmx/shared-api-interfaces';

export class CreateJobOpeningUseCase
  implements UseCase<EditableJobOpening, JobOpening>
{
  constructor(private jobOpeningService: JobOpeningService) {}

  execute(data: EditableJobOpening) {
    return this.jobOpeningService.create(data);
  }
}
