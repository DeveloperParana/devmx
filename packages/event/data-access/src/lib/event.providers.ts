// import { provideFindCitiesByLocationUseCase } from '@devmx/location-data-source';
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

    // provideFindCitiesByLocationUseCase(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideRemoveEventUseCase(),
    provideUploadCoverUseCase(),

    provideEventFacade(),
  ];
}
