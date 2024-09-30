import { QueryParamsDto } from '@devmx/shared-data-source';
import { City } from '@devmx/shared-api-interfaces';
import {
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
  SearchCitiesUseCase,
} from '@devmx/location-domain/server';
import { LocationFilter } from '@devmx/location-domain';

export class CitiesFacade {
  constructor(
    private findCitiesUseCase: FindCitiesUseCase,
    private searchCitiesUseCase: SearchCitiesUseCase,
    private findCityByIDUseCase: FindCityByIDUseCase,
    private findCitiesByLocationUseCase: FindCitiesByLocationUseCase
  ) {}

  find(params: QueryParamsDto<City>) {
    return this.findCitiesUseCase.execute(params);
  }

  search(name: string) {
    return this.searchCitiesUseCase.execute(name);
  }

  findOne(id: string) {
    return this.findCityByIDUseCase.execute(id);
  }

  findByLocation(filter: LocationFilter) {
    return this.findCitiesByLocationUseCase.execute(filter);
  }
}
