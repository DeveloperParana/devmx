import { Observable } from 'rxjs';
import { Address } from '../dtos';

export abstract class AddressService {
  abstract findLocationByAddress(address: string): Observable<Address>;
}
