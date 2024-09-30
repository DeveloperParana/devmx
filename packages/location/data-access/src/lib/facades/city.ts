import { LocationFilter } from '@devmx/location-domain';
import {
  SearchCitiesUseCase,
  FindCitiesByLocationUseCase,
} from '@devmx/location-domain/client';
import { City, Page } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';

interface CityState {
  cities: Page<City>;
  result: City[]
  city: City | null;
}

export class CityFacade extends State<CityState> {
  constructor(
    private findCitiesByLocationUseCase: FindCitiesByLocationUseCase,
    private searchCitiesUseCase: SearchCitiesUseCase
  ) {
    super({
      cities: { data: [], items: 0, pages: 0 },
      result: [],
      city: null,
    });
  }

  findByLocation(filter: LocationFilter) {
    return this.findCitiesByLocationUseCase.execute(filter);
  }

  search(name: string) {
    return this.searchCitiesUseCase.execute(name);
  }
}
