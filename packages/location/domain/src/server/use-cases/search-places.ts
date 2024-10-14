import { Place, UseCase } from '@devmx/shared-api-interfaces';
import { PlacesService } from '../services';

export class SearchPlacesUseCase implements UseCase<string, Place[]> {
  constructor(private placesService: PlacesService) {}

  async execute(name: string) {
    return this.placesService.search(name);
  }
}
