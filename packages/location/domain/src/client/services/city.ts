import { City, Page, QueryParams } from '@devmx/shared-api-interfaces';
import { LocationFilter } from '../../lib/dtos';
import { Observable } from 'rxjs';

export abstract class CityService {
  abstract find(params: QueryParams<City>): Observable<Page<City>>;

  abstract search(name: string): Observable<City[]>

  abstract findByLocation(filter: LocationFilter): Observable<City[]>;

  abstract findOne(id: string): Observable<City>;
}
