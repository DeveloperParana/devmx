import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { CreatePlace } from '../../lib/dtos';
import { PlacesService } from '../services';

export class CreatePlaceUseCase implements UseCase<CreatePlace, Place> {
  constructor(private placesService: PlacesService) {}

  execute(data: CreatePlace) {
    return this.placesService.create(data);
  }
}
