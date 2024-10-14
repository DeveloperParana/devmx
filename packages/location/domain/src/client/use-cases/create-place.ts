import { UseCase, Place } from '@devmx/shared-api-interfaces';
import { CreatePlace } from '../../lib/dtos';
import { PlaceService } from '../services';

export class CreatePlaceUseCase implements UseCase<CreatePlace, Place> {
  constructor(private placeService: PlaceService) {}

  execute(data: CreatePlace) {
    return this.placeService.create(data);
  }
}
