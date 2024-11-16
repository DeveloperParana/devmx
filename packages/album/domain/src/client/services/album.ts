import { HttpProgressEvent } from '@devmx/shared-api-interfaces/client';
import { EntityService } from '@devmx/shared-api-interfaces/client';
import { Album } from '@devmx/shared-api-interfaces';
import { UploadPhoto } from '../dtos';
import { Observable } from 'rxjs';

export abstract class AlbumService extends EntityService<Album> {
  abstract upload(data: UploadPhoto): Observable<HttpProgressEvent>;
}
