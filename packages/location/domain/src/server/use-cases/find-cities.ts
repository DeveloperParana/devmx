import {
  Page,
  City,
  UseCase,
  FindFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';
import { CitiesService } from '../services';

export class FindCitiesUseCase
  implements UseCase<QueryParams<City>, Page<City>>
{
  constructor(private citiesService: CitiesService) {}

  async execute(params: QueryParams<City>) {
    const filter: FindFilter<City> = {};

    if (params.filter) {
      if (params.filter.name) {
        filter.name = new RegExp(params.filter.name, 'i');
      }
    }

    return this.citiesService.find(params);
  }
}
