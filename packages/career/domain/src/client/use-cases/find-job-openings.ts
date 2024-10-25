import { JobOpeningService } from '../services';
import {
  Page,
  UseCase,
  JobOpening,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindJobOpeningsUseCase
  implements UseCase<QueryParams<JobOpening>, Page<JobOpening>>
{
  constructor(private jobOpeningService: JobOpeningService) {}

  execute(params: QueryParams<JobOpening>) {
    return this.jobOpeningService.find(params);
  }
}
