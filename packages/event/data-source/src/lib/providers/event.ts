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
  provideFindEventsUntilUseCase,
} from '@devmx/event-domain/server';

export function provideEvent() {
  return [
    provideEventsMongoService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindMyEventsUseCase(),
    provideFindEventsFromUseCase(),
    provideFindEventsUntilUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),
    provideCopyEventUseCase(),

    provideEventsFacade(),
  ];
}
