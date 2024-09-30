import {
  provideEventsFacade,
  provideEventsService,
  provideCreateEventUseCase,
  provideFindEventByIDUseCase,
  provideFindEventsUseCase,
  provideRemoveEventUseCase,
  provideUpdateEventUseCase,
} from './providers';

export function provideEvents() {
  return [
    provideEventsService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideRemoveEventUseCase(),

    provideEventsFacade(),
  ];
}
