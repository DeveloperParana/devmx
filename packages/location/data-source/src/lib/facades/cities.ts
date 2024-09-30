import { QueryParamsDto } from '@devmx/shared-data-source';
import { City } from '@devmx/shared-api-interfaces';
import {
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
} from '@devmx/location-domain/server';
import { LocationFilter } from '@devmx/location-domain';

export class CitiesFacade {
  constructor(
    private findCitiesUseCase: FindCitiesUseCase,
    private findCityByIDUseCase: FindCityByIDUseCase,
    private findCitiesByLocationUseCase: FindCitiesByLocationUseCase,
  ) {}

  find(params: QueryParamsDto<City>) {
    return this.findCitiesUseCase.execute(params);
  }

  findOne(id: string) {
    return this.findCityByIDUseCase.execute(id);
  }

  findByLocation(filter: LocationFilter) {
    return this.findCitiesByLocationUseCase.execute(filter);
  }
}
