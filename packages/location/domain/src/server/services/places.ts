import { CreatePlace, LocationFilter, UpdatePlace } from '../../lib/dtos';
import {
  Page,
  Place,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export abstract class PlacesService {
  abstract create(data: CreatePlace): Promise<Place>;

  abstract find(params: QueryParams<Place>): Promise<Page<Place>>;

  abstract search(name: string): Promise<Place[]>;

  abstract findOne(id: string): Promise<Place | null>;

  abstract findByLocation(filter: LocationFilter): Promise<Place[]>;

  abstract findOneBy(filter: QueryFilter<Place>): Promise<Place | null>;

  abstract update(id: string, data: UpdatePlace): Promise<Place | null>;

  abstract remove(id: string): Promise<Place | null>;
}
