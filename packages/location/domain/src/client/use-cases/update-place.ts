import { UseCase, Place } from '@devmx/shared-api-interfaces';
import { PlaceService } from '../services';
import { UpdatePlace } from '../../lib/dtos';

export class UpdatePlaceUseCase implements UseCase<UpdatePlace, Place> {
  constructor(private placeService: PlaceService) {}

  execute(data: UpdatePlace) {
    return this.placeService.update(data.id, data);
  }
}
