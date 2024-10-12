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
    // provideCitiesService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideRemoveEventUseCase(),

    provideEventsFacade(),
  ];
}
