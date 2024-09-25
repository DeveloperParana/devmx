import { Page, City } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class CityService {
  abstract find(params: URLSearchParams): Observable<Page<City>>;

  abstract findOne(id: string): Observable<City>;
}
