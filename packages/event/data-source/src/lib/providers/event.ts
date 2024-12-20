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
  provideFindMyEventsUseCase,
} from '@devmx/event-domain/server';

export function provideEvent() {
  return [
    provideEventsMongoService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindMyEventsUseCase(),
    provideFindEventsFromUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),
    provideCopyEventUseCase(),

    provideEventsFacade(),
  ];
}
