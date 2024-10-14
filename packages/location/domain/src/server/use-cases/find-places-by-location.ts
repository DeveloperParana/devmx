import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { LocationFilter } from '../../lib/dtos';
import { PlacesService } from '../services';

export class FindPlacesByLocationUseCase
  implements UseCase<LocationFilter, Place[]>
{
  constructor(private placesService: PlacesService) {}

  async execute(filter: LocationFilter) {
    return this.placesService.findByLocation(filter);
  }
}
