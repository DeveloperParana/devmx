import {
  Page,
  City,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export abstract class CitiesService {
  abstract find(params: QueryParams<City>): Promise<Page<City>>;

  abstract findOne(id: string): Promise<City | null>;

  abstract findOneBy(filter: QueryFilter<City>): Promise<City | null>;
}
