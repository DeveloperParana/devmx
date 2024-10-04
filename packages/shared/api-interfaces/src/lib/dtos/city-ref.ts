import { City } from '../entities';

export type CityRef = Pick<City, 'id' | 'name' | 'location' | 'timeZone'>;
