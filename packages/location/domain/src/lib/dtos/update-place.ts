import { Place } from '@devmx/shared-api-interfaces';
import { CreateLocation } from './create-location';

export interface UpdatePlace extends Omit<Place, 'location'> {
  location: CreateLocation;
}
