import { EventsService, FindEventsUseCase } from '@devmx/event-domain/server';
import { createUseCaseProvider } from '@devmx/shared-data-source';

export function provideFindEventsUseCase() {
  return createUseCaseProvider(FindEventsUseCase, [EventsService]);
}
