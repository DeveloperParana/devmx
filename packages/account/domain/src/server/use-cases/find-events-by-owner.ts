import { Page, Event, UseCase, EventOut } from '@devmx/shared-api-interfaces';
import { EventsService } from '@devmx/event-domain/server';
import { QueryByOwnerParams } from '../dtos';

export class FindEventsByOwnerUseCase
  implements UseCase<QueryByOwnerParams<EventOut>, Page<Event>>
{
  constructor(private eventsService: EventsService) {}

  execute({ owner, ...params }: QueryByOwnerParams<EventOut>) {
    params.filter = {...params.filter, owner}
    return this.eventsService.find(params);
  }
}
