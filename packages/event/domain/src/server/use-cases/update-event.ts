import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { EventsService } from '../services';
import { UpdateEvent } from '../../lib/dtos';

export class UpdateEventUseCase implements UseCase<UpdateEvent, Event> {
  constructor(private eventsService: EventsService) {}

  async execute(data: UpdateEvent) {
    const event = await this.eventsService.findOne(data.id);

    if (!event) {
      throw new NotFoundError(`Evento não encontrado`);
    }

    const updated = await this.eventsService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados do evento`
      );
    }

    return updated;
  }
}
