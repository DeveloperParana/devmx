import { CreatePlace, LocationFilter, UpdatePlace } from '../../lib/dtos';
import { Place, Page, QueryParams } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class PlaceService {
  abstract find(params: QueryParams<Place>): Observable<Page<Place>>;

  abstract findOne(id: string): Observable<Place>;

  abstract create(data: CreatePlace): Observable<Place>;

  abstract search(name: string): Observable<Place[]>;

  abstract findByLocation(filter: LocationFilter): Observable<Place[]>;

  abstract update(id: string, data: UpdatePlace): Observable<Place>;

  abstract remove(id: string): Observable<Place>;
}
