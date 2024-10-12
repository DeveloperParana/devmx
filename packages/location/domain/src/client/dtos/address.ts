export type Boundingbox = [number, number, number, number];

export interface Address {
  lat: number;
  lon: number;
  name: string;
  boundingbox: Boundingbox;
}
