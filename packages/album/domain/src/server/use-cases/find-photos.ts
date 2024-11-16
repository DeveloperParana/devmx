import { PhotosService } from '../services';
import {
  Page,
  Photo,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindPhotosUseCase
  implements UseCase<QueryParams<Photo>, Page<Photo>>
{
  constructor(private photosService: PhotosService) {}

  async execute(params: QueryParams<Photo>) {
    return this.photosService.find(params);
  }
}
