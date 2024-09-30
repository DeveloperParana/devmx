import {
  Page,
  City,
  QueryParams,
} from '@devmx/shared-api-interfaces';
import { LocationFilter } from '../../lib/dtos';

export abstract class CitiesService {
  abstract find(params: QueryParams<City>): Promise<Page<City>>;

  abstract findOne(id: string): Promise<City | null>;

  abstract findByLocation(filter: LocationFilter): Promise<City[]>;
  // abstract findOneBy(filter: QueryFilter<City>): Promise<City | null>;
}
