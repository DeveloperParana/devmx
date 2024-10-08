import { City, UseCase } from '@devmx/shared-api-interfaces';
import { LocationFilter } from '../../lib/dtos';
import { CitiesService } from '../services';

export class FindCitiesByLocationUseCase
  implements UseCase<LocationFilter, City[]>
{
  constructor(private citiesService: CitiesService) {}

  async execute(filter: LocationFilter) {
    return this.citiesService.findByLocation(filter);
  }
}
