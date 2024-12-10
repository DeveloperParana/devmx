import { UseCase, Event } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class DeleteEventUseCase implements UseCase<string, Event> {
  constructor(private eventService: EventService) {}

  execute(id: string) {
    return this.eventService.delete(id);
  }
}

export function provideDeleteEventUseCase() {
  return createUseCaseProvider(DeleteEventUseCase, [EventService]);
}
