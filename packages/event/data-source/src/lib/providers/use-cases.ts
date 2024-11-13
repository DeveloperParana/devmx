import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CreateEventUseCase,
  EventsService,
  FindEventByIDUseCase,
  FindEventsUseCase,
  DeleteEventUseCase,
  UpdateEventUseCase,
  CreateRSVPUseCase,
  RSVPsService,
  FindRSVPByEventUseCase,
  FindRSVPConfirmedByEventUseCase,
  FindEventsFromUseCase,
} from '@devmx/event-domain/server';

export function provideCreateEventUseCase() {
  return createUseCaseProvider(CreateEventUseCase, [EventsService]);
}

export function provideFindEventsUseCase() {
  return createUseCaseProvider(FindEventsUseCase, [EventsService]);
}

export function provideFindEventsFromUseCase() {
  return createUseCaseProvider(FindEventsFromUseCase, [EventsService]);
}

export function provideFindEventByIDUseCase() {
  return createUseCaseProvider(FindEventByIDUseCase, [EventsService]);
}

export function provideUpdateEventUseCase() {
  return createUseCaseProvider(UpdateEventUseCase, [EventsService]);
}

export function provideDeleteEventUseCase() {
  return createUseCaseProvider(DeleteEventUseCase, [EventsService]);
}

export function provideCreateRSVPUseCase() {
  return createUseCaseProvider(CreateRSVPUseCase, [RSVPsService]);
}

export function provideFindRSVPByEventUseCase() {
  return createUseCaseProvider(FindRSVPByEventUseCase, [RSVPsService]);
}

export function provideFindRSVPConfirmedByEventUseCase() {
  return createUseCaseProvider(FindRSVPConfirmedByEventUseCase, [RSVPsService]);
}

export function provideUseCases() {
  return [
    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventsFromUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),

    provideCreateRSVPUseCase(),
    provideFindRSVPByEventUseCase(),
    provideFindRSVPConfirmedByEventUseCase(),
  ];
}
