import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { LocationFilter } from '../../lib/dtos';
import { PlaceService } from '../services';

export class FindPlacesByLocationUseCase
  implements UseCase<LocationFilter, Place[]>
{
  constructor(private placeService: PlaceService) {}

  execute(filter: LocationFilter) {
    return this.placeService.findByLocation(filter);
  }
}
