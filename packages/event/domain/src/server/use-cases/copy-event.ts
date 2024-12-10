/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { CopyEvent, Event, UseCase } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { EventsService } from '../services';

export class CopyEventUseCase implements UseCase<CopyEvent, Event> {
  constructor(private eventsService: EventsService) {}

  async execute({ id, title }: CopyEvent) {
    const event = await this.eventsService.findOne(id);

    if (!event) {
      throw new NotFoundError(`Evento não encontrado`);
    }

    const { id: _, ...data } = event;

    const copied = { ...data, title } as Event;

    const updated = await this.eventsService.create(copied);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados do evento`
      );
    }

    return updated;
  }
}

export function provideCopyEventUseCase() {
  return createUseCaseProvider(CopyEventUseCase, [EventsService]);
}
