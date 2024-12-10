import { provideEventsMongoService } from '../infrastructure';
import { provideEventsFacade } from '../application';
import {
  provideFindEventsUseCase,
  provideDeleteEventUseCase,
  provideCreateEventUseCase,
  provideUpdateEventUseCase,
  provideFindEventByIDUseCase,
  provideFindEventsFromUseCase,
  provideCopyEventUseCase,
} from '@devmx/event-domain/server';

export function provideEvent() {
  return [
    provideEventsMongoService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindEventsFromUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),
    provideCopyEventUseCase(),

    provideEventsFacade(),
  ];
}
