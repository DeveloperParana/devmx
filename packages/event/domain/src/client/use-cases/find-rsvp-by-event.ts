import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { UseCase, RSVP } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class FindRSVPByEventUseCase implements UseCase<string, RSVP[]> {
  constructor(private eventService: EventService) {}

  execute(event: string) {
    return this.eventService.findRSVPByEvent(event);
  }
}

export function provideFindRSVPByEventUseCase() {
  return createUseCaseProvider(FindRSVPByEventUseCase, [EventService]);
}
