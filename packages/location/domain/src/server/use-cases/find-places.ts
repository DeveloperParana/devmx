import {
  Page,
  Place,
  UseCase,
  FindFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';
import { PlacesService } from '../services';

export class FindPlacesUseCase
  implements UseCase<QueryParams<Place>, Page<Place>>
{
  constructor(private placeservice: PlacesService) {}

  async execute(params: QueryParams<Place>) {
    const filter: FindFilter<Place> = {};

    if (params.filter) {
      if (params.filter.name) {
        filter.name = new RegExp(params.filter.name, 'i');
      }

      if (params.filter.address) {
        filter.address = new RegExp(params.filter.address, 'i');
      }
    }

    return this.placeservice.find(params);
  }
}
