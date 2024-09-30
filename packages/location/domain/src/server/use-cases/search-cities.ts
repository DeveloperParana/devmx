import { City, UseCase } from '@devmx/shared-api-interfaces';
import { CitiesService } from '../services';

export class SearchCitiesUseCase implements UseCase<string, City[]> {
  constructor(private citiesService: CitiesService) {}

  async execute(name: string) {
    return this.citiesService.search(name);
  }
}
