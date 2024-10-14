import { createQueryParams } from '@devmx/shared-util-data';
import { PlaceService } from '../services';
import {
  Page,
  Place,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindPlacesUseCase
  implements UseCase<QueryParams<Place>, Page<Place>>
{
  constructor(private placeService: PlaceService) {}

  execute(params: QueryParams<Place>) {
    return this.placeService.find(createQueryParams(params));
  }
}
