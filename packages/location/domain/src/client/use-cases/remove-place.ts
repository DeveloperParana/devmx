import { UseCase, Place } from '@devmx/shared-api-interfaces';
import { PlaceService } from '../services';

export class RemovePlaceUseCase implements UseCase<string, Place> {
  constructor(private placeService: PlaceService) {}

  execute(id: string) {
    return this.placeService.remove(id);
  }
}
