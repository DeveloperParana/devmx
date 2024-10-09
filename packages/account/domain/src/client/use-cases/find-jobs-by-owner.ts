import { createQueryParams } from '@devmx/shared-util-data';
import { AccountService } from '../services';
import {
  Job,
  Page,
  JobOut,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindJobsByOwnerUseCase
  implements UseCase<QueryParams<Job>, Page<JobOut>>
{
  constructor(private accountService: AccountService) {}

  execute(params: QueryParams<Job>) {
    return this.accountService.findJobs(createQueryParams(params));
  }
}
