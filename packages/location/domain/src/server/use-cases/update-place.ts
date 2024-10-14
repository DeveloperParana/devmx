import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { PlacesService } from '../services';
import { UpdatePlace } from '../../lib/dtos';

export class UpdatePlaceUseCase implements UseCase<UpdatePlace, Place> {
  constructor(private placesService: PlacesService) {}

  async execute(data: UpdatePlace) {
    const place = await this.placesService.findOne(data.id);

    if (!place) {
      throw new NotFoundError(`Local não encontrado`);
    }

    const updated = await this.placesService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados do local`
      );
    }

    return updated;
  }
}
