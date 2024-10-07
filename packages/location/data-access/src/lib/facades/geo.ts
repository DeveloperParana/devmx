import { GetCurrentPositionUseCase } from '@devmx/location-domain/client';
import { GeoCoords } from '@devmx/shared-api-interfaces';
import { catchError, Observable, take } from 'rxjs';
import { State } from '@devmx/shared-data-access';

type GeoStatus =
  | 'waiting'
  | 'permission'
  | 'unavailable'
  | 'timeout'
  | 'available';

interface GeoState {
  coords: GeoCoords;
  status: GeoStatus;
}

export class GeoFacade extends State<GeoState> {
  coords$ = this.select((state) => state.coords);

  status$ = this.select((state) => state.status);

  #result: GeoStatus[] = ['waiting', 'permission', 'unavailable', 'timeout'];

  constructor(private getCurrentPositionUseCase: GetCurrentPositionUseCase) {
    super({
      coords: { lat: 0, lng: 0 },
      status: 'waiting',
    });
  }

  loadPosition() {
    const coords$ = this.getCurrentPositionUseCase.execute();

    const onCoords = (coords: GeoCoords) => {
      const status = 'available';
      this.setState({ coords, status });
    };

    coords$.pipe(take(1), catchError(this.#handleStatus)).subscribe(onCoords);
  }

  #handleStatus = <T>(err: Error, caught: Observable<T>) => {
    if (err && typeof err.cause === 'number') {
      const status = this.#result[err.cause];
      this.setState({ status });
      throw err;
    }
    return caught;
  };
}
