import { createServerProvider } from '@devmx/shared-data-source';
import { EventsFacade } from '../facades';
import {
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/server';

export function provideEventsFacade() {
  return createServerProvider(EventsFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    RemoveEventUseCase,
  ]);
}
