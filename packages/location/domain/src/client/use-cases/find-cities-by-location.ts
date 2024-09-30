import { City, UseCase } from '@devmx/shared-api-interfaces';
import { LocationFilter } from '../../lib/dtos';
import { CityService } from '../services';

export class FindCitiesByLocationUseCase
  implements UseCase<LocationFilter, City[]>
{
  constructor(private cityService: CityService) {}

  execute(filter: LocationFilter) {
    return this.cityService.findByLocation(filter);
  }
}
