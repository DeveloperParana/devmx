import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { PlacesService } from '../services';

export class RemovePlaceUseCase implements UseCase<string, Place> {
  constructor(private placesService: PlacesService) {}

  async execute(id: string) {
    const removed = await this.placesService.remove(id);

    if (!removed) {
      throw new PersistenceError(`Algo deu errado ao remover local`);
    }

    return removed;
  }
}
