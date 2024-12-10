import { CreateEvent, UseCase, Event } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class CreateEventUseCase implements UseCase<CreateEvent, Event> {
  constructor(private eventService: EventService) {}

  execute(data: CreateEvent) {
    return this.eventService.create(data);
  }
}

export function provideCreateEventUseCase() {
  return createUseCaseProvider(CreateEventUseCase, [EventService]);
}
