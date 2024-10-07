import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  EventService,
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
  UploadCoverUseCase,
} from '@devmx/event-domain/client';

export function provideCreateEventUseCase() {
  return createUseCaseProvider(CreateEventUseCase, [EventService]);
}

export function provideFindEventsUseCase() {
  return createUseCaseProvider(FindEventsUseCase, [EventService]);
}

export function provideFindEventByIDUseCase() {
  return createUseCaseProvider(FindEventByIDUseCase, [EventService]);
}

export function provideUpdateEventUseCase() {
  return createUseCaseProvider(UpdateEventUseCase, [EventService]);
}

export function provideRemoveEventUseCase() {
  return createUseCaseProvider(RemoveEventUseCase, [EventService]);
}

export function provideUploadCoverUseCase() {
  return createUseCaseProvider(UploadCoverUseCase, [EventService]);
}
