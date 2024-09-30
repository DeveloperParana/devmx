import { createClientProvider } from '@devmx/shared-data-access';
import { EventFacade } from '../facades';
import {
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/client';

export function provideEventFacade() {
  return createClientProvider(EventFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    RemoveEventUseCase,
  ]);
}
