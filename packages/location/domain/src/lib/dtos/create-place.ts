import { Place } from '@devmx/shared-api-interfaces';
import { CreateLocation } from './create-location';

export interface CreatePlace extends Omit<Place, 'id' | 'location'> {
  location: CreateLocation;
}
