import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { AlbumService } from '../services';
import {
  Page,
  Album,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindAlbumsUseCase
  implements UseCase<QueryParams<Album>, Page<Album>>
{
  constructor(private albumService: AlbumService) {}

  execute(data: QueryParams<Album>) {
    return this.albumService.find(data);
  }
}

export function provideFindAlbumsUseCase() {
  return createUseCaseProvider(FindAlbumsUseCase, [AlbumService]);
}
