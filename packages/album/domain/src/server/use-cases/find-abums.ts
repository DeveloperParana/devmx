import { AlbumsService } from '../services';
import {
  Page,
  Album,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindAlbumsUseCase
  implements UseCase<QueryParams<Album>, Page<Album>>
{
  constructor(private albumsService: AlbumsService) {}

  async execute(params: QueryParams<Album>) {
    return this.albumsService.find(params);
  }
}
