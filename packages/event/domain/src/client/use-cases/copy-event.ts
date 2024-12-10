import { UseCase, Event, CopyEvent } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { EventService } from '../services';

export class CopyEventUseCase implements UseCase<CopyEvent, Event> {
  constructor(private eventService: EventService) {}

  execute({ id, title }: CopyEvent) {
    return this.eventService.copy(id, { id, title });
  }
}

export function provideCopyEventUseCase() {
  return createUseCaseProvider(CopyEventUseCase, [EventService]);
}
