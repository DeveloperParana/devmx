import { PhotoService } from '../services';
import {
  Page,
  Photo,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindPhotosUseCase
  implements UseCase<QueryParams<Photo>, Page<Photo>>
{
  constructor(private albumService: PhotoService) {}

  execute(data: QueryParams<Photo>) {
    return this.albumService.find(data);
  }
}
