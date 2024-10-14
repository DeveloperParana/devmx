import { UseCase, Place } from '@devmx/shared-api-interfaces';
import { PlaceService } from '../services';

export class FindPlaceByIDUseCase implements UseCase<string, Place> {
  constructor(private placeService: PlaceService) {}

  execute(id: string) {
    return this.placeService.findOne(id);
  }
}
