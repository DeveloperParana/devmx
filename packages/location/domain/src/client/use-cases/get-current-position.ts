import { GeoCoords, UseCase } from '@devmx/shared-api-interfaces';
import { async } from '@devmx/shared-util-data';
import { from, map } from 'rxjs';
const getCurrentPosition = () => {
  return async<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, (err) => {
      reject(new Error(err.message, { cause: err.code }));
    });
  });
};
export class GetCurrentPositionUseCase implements UseCase<void, GeoCoords> {
  execute() {
    const mapCoords = ({ coords }: GeolocationPosition) => {
      return { lat: coords.latitude, lng: coords.longitude };
    };

    return from(getCurrentPosition()).pipe(map(mapCoords));
  }
}
