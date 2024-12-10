import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { CreateEvent } from '../../lib/dtos';
import { EventsService } from '../services';

export class CreateEventUseCase implements UseCase<CreateEvent, Event> {
  constructor(private readonly eventsService: EventsService) {}

  execute(data: CreateEvent) {
    return this.eventsService.create(data);
  }
}

export function provideCreateEventUseCase() {
  return createUseCaseProvider(CreateEventUseCase, [EventsService]);
}
