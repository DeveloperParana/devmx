import { EventsService } from '@devmx/event-domain/server';
import { QueryByOwnerParams } from '../dtos';
import { Page, Event, UseCase, EventOut } from '@devmx/shared-api-interfaces';

export class FindEventsByOwnerUseCase
  implements UseCase<QueryByOwnerParams<EventOut>, Page<Event>>
{
  constructor(private eventsService: EventsService) {}

  execute({ owner, ...params }: QueryByOwnerParams<EventOut>) {
    return this.eventsService.findByOwner(owner, params);
  }
}
