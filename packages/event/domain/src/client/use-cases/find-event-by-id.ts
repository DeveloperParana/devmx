import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { UseCase, Event } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class FindEventByIDUseCase implements UseCase<string, Event | null> {
  constructor(private eventService: EventService) {}

  execute(id: string) {
    return this.eventService.findOne(id);
  }
}

export function provideFindEventByIDUseCase() {
  return createUseCaseProvider(FindEventByIDUseCase, [EventService]);
}
