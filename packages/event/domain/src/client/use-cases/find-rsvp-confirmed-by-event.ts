import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { UseCase, RSVP } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class FindRSVPConfirmedByEventUseCase
  implements UseCase<string, RSVP[]>
{
  constructor(private eventService: EventService) {}

  execute(event: string) {
    return this.eventService.findRSVPConfirmedByEvent(event);
  }
}

export function provideFindRSVPConfirmedByEventUseCase() {
  return createUseCaseProvider(FindRSVPConfirmedByEventUseCase, [EventService]);
}
