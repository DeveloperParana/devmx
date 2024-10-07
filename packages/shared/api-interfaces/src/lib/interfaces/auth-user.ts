import { AccountRole } from '../types';
import { GeoCoords } from './geo-coords';
import { Name } from './name';

export interface AuthCity extends GeoCoords {
  id: string;
  name: string;
}

export interface AuthUser {
  id: string;
  name: Name;
  email: string;
  username: string;
  roles: AccountRole;
  photo: string;
  city?: AuthCity;
}
