import { createQueryParams } from '@devmx/shared-util-data';
import { AccountService } from '../services';
import {
  Page,
  Event,
  UseCase,
  EventOut,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindEventsByOwnerUseCase
  implements UseCase<QueryParams<Event>, Page<EventOut>>
{
  constructor(private accountService: AccountService) {}

  execute(params: QueryParams<Event>) {
    return this.accountService.findEvents(createQueryParams(params));
  }
}
