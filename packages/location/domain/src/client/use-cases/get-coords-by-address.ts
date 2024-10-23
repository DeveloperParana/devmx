import { UseCase } from '@devmx/shared-api-interfaces';
import { AddressService } from '../services';
import { Address } from '../dtos';

export class GetCoordsByAddressUseCase implements UseCase<string, Address> {
  constructor(private addressService: AddressService) {}

  execute(address: string) {
    return this.addressService.findLocationByAddress(address);
  }
}
