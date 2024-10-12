import { GeoCoords } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  Address,
  GetCoordsByAddressUseCase,
} from '@devmx/location-domain/client';

interface AddressState {
  address: string | null;
  coords: GeoCoords | null;
}

export class AddressFacade extends State<AddressState> {
  coords$ = this.select((state) => state.coords);

  constructor(
    private findCoordinatesByAddressUseCase: GetCoordsByAddressUseCase
  ) {
    super({ address: null, coords: null });
  }

  findCoords(address: string) {
    const request$ = this.findCoordinatesByAddressUseCase.execute(address);

    const onResponse = (address: Address) => {
      const { lat, lon } = address;
      this.setState({ coords: { lat, lng: lon } });
    };

    request$.pipe(take(1)).subscribe(onResponse);
  }
}
