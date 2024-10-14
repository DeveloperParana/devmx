import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { PlaceService } from '../services';

export class SearchPlacesUseCase implements UseCase<string, Place[]> {
  constructor(private placeService: PlaceService) {}

  execute(name: string) {
    return this.placeService.search(name);
  }
}
