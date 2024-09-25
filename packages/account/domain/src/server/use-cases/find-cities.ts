import { Page, City, UseCase, QueryParams } from '@devmx/shared-api-interfaces';
import { CitiesService } from '../services';

export class FindCitiesUseCase
  implements UseCase<QueryParams<City>, Page<City>>
{
  constructor(private citiesService: CitiesService) {}

  async execute(params: QueryParams<City>) {
    return this.citiesService.find(params);
  }
}
