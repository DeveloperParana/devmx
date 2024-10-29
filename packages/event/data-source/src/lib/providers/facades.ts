import { createServerProvider } from '@devmx/shared-data-source';
import { EventsFacade } from '../application';
import {
  CreateEventUseCase,
  DeleteEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/server';

export function provideEventsFacade() {
  return createServerProvider(EventsFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    DeleteEventUseCase,
  ]);
}

export function provideFacades() {
  return [provideEventsFacade()];
}
