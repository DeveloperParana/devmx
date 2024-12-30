import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { EventsService } from '../services';
import { UpdateEvent } from '../../lib/dtos';

export class UpdateEventUseCase implements UseCase<UpdateEvent, Event | null> {
  constructor(private eventsService: EventsService) {}

  async execute(data: UpdateEvent) {
    return await this.eventsService.update(data.id, data);
  }
}

export function provideUpdateEventUseCase() {
  return createUseCaseProvider(UpdateEventUseCase, [EventsService]);
}
