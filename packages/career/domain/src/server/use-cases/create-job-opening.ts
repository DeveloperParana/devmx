import { JobOpeningsService } from '../services';
import {
  UseCase,
  JobOpening,
  EditableJobOpening,
} from '@devmx/shared-api-interfaces';

export class CreateJobOpeningUseCase
  implements UseCase<EditableJobOpening, JobOpening>
{
  constructor(private readonly jobOpeningsService: JobOpeningsService) {}

  execute(data: EditableJobOpening) {
    return this.jobOpeningsService.create(data);
  }
}
