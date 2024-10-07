import {
  provideEventService,
  provideCreateEventUseCase,
  provideFindEventByIDUseCase,
  provideFindEventsUseCase,
  provideRemoveEventUseCase,
  provideUpdateEventUseCase,
  provideEventFacade,
  provideUploadCoverUseCase,
} from './providers';

export function provideEvent() {
  return [
    provideEventService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideRemoveEventUseCase(),
    provideUploadCoverUseCase(),

    provideEventFacade(),
  ];
}
