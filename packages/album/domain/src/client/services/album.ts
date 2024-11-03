import { EntityService } from '@devmx/shared-api-interfaces/client';
import { Album } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class AlbumService extends EntityService<Album> {
  abstract savePhoto(album: string, photo: File): Observable<unknown>;
}
