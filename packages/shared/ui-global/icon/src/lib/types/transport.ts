export type Transport =
  | 'bycicle'
  | 'compass'
  | 'danger'
  | 'flag-pin'
  | 'globe-check'
  | 'globe-search'
  | 'globe'
  | 'gps'
  | 'location-pin-alt'
  | 'location-pin'
  | 'map-check'
  | 'map-pin'
  | 'map'
  | 'navigation-framed'
  | 'navigation'
  | 'pin-check'
  | 'pin-minus'
  | 'pin-plus'
  | 'route'
  | 'speed-meter'
  | 'swap-locations';

export type TransportIcon = `transport/${Transport}`;
