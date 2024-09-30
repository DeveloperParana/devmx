import {
  provideEventService,
  provideCreateEventUseCase,
  provideFindEventByIDUseCase,
  provideFindEventsUseCase,
  provideRemoveEventUseCase,
  provideUpdateEventUseCase,
  provideEventFacade,
} from './providers';

export function provideEvent() {
  return [
    provideEventService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideRemoveEventUseCase(),

    provideEventFacade(),
  ];
}
