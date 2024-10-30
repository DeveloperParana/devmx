import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  EventService,
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  DeleteEventUseCase,
  UpdateEventUseCase,
  CreateRSVPUseCase,
  FindRSVPByEventUseCase,
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

export function provideDeleteEventUseCase() {
  return createUseCaseProvider(DeleteEventUseCase, [EventService]);
}

export function provideCreateRSVPUseCase() {
  return createUseCaseProvider(CreateRSVPUseCase, [EventService]);
}

export function provideFindRSVPByEventUseCase() {
  return createUseCaseProvider(FindRSVPByEventUseCase, [EventService]);
}

// export function provideUploadCoverUseCase() {
//   return createUseCaseProvider(UploadCoverUseCase, [EventService]);
// }

export function provideUseCases() {
  return [
    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),

    provideCreateRSVPUseCase(),
    provideFindRSVPByEventUseCase(),
  ];
}
