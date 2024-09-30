import { createServerProvider } from '@devmx/shared-data-source';
import { EventsFacade } from '../facades';
import { FindEventsUseCase } from '@devmx/event-domain/server';

export function provideEventsFacade() {
  return createServerProvider(EventsFacade, [FindEventsUseCase]);
}
