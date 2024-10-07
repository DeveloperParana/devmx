import { GeoCoords } from './geo-coords';

export interface QueryLocation extends GeoCoords {
  min: number;

  max: number;
}
