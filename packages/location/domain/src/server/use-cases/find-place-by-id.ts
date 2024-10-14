import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { PlacesService } from '../services';

export class FindPlaceByIDUseCase implements UseCase<string, Place> {
  constructor(private placesService: PlacesService) {}

  async execute(id: string) {
    const place = await this.placesService.findOne(id);

    if (!place) {
      throw new NotFoundError('Local não encontrado');
    }

    return place;
  }
}
