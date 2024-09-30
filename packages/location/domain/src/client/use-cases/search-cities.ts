import { City, UseCase } from '@devmx/shared-api-interfaces';
import { CityService } from '../services';

export class SearchCitiesUseCase implements UseCase<string, City[]> {
  constructor(private cityService: CityService) {}

  execute(name: string) {
    return this.cityService.search(name);
  }
}
