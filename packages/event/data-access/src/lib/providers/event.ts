import { provideEventHttpService } from '../infrastructure';
import { provideEventFacade } from '../application';
import {
  provideCopyEventUseCase,
  provideCreateEventUseCase,
  provideDeleteEventUseCase,
  provideFindAllEventsUseCase,
  provideFindEventByIDUseCase,
  provideFindEventsUseCase,
  provideFindMyEventsUseCase,
  provideUpdateEventUseCase,
} from '@devmx/event-domain/client';

export function provideEvent() {
  return [
    provideEventHttpService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindMyEventsUseCase(),
    provideFindAllEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),
    provideCopyEventUseCase(),

    provideEventFacade(),
  ];
}
