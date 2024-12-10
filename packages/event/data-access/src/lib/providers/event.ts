import { provideEventHttpService } from '../infrastructure';
import { provideEventFacade } from '../application';
import {
  provideCopyEventUseCase,
  provideCreateEventUseCase,
  provideDeleteEventUseCase,
  provideFindAllEventsUseCase,
  provideFindEventByIDUseCase,
  provideFindEventsUseCase,
  provideUpdateEventUseCase,
} from '@devmx/event-domain/client';

export function provideEvent() {
  return [
    provideEventHttpService(),

    provideCreateEventUseCase(),
    provideFindEventsUseCase(),
    provideFindAllEventsUseCase(),
    provideFindEventByIDUseCase(),
    provideUpdateEventUseCase(),
    provideDeleteEventUseCase(),
    provideCopyEventUseCase(),

    provideEventFacade(),
  ];
}
