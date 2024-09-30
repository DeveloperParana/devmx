import { Location } from '../interfaces';

export interface City {
  id: string;
  ibge: number;
  name: string;
  location: Location;
  capital: boolean;
  ibgeState: number;
  siafi: number;
  ddd: number;
  timeZone: string;
}
