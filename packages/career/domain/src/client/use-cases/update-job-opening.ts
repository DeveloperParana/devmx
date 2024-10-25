import { JobOpeningService } from '../services';
import {
  UseCase,
  JobOpening,
  EditableJobOpening,
} from '@devmx/shared-api-interfaces';

export class UpdateJobOpeningUseCase
  implements UseCase<EditableJobOpening, JobOpening>
{
  constructor(private skillService: JobOpeningService) {}

  execute(data: EditableJobOpening) {
    return this.skillService.update(data.id, data);
  }
}
