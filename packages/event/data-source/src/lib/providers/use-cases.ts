import {
  CreateEventUseCase,
  EventsService,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/server';
import { createUseCaseProvider } from '@devmx/shared-data-source';

export function provideCreateEventUseCase() {
  return createUseCaseProvider(CreateEventUseCase, [EventsService]);
}

export function provideFindEventsUseCase() {
  return createUseCaseProvider(FindEventsUseCase, [EventsService]);
}

export function provideFindEventByIDUseCase() {
  return createUseCaseProvider(FindEventByIDUseCase, [EventsService]);
}

export function provideUpdateEventUseCase() {
  return createUseCaseProvider(UpdateEventUseCase, [EventsService]);
}

export function provideRemoveEventUseCase() {
  return createUseCaseProvider(RemoveEventUseCase, [EventsService]);
}
