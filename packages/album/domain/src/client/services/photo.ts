import { HttpProgressEvent } from '@devmx/shared-api-interfaces/client';
import { EntityService } from '@devmx/shared-api-interfaces/client';
import { EditablePhoto, Photo } from '@devmx/shared-api-interfaces';
import { UploadPhoto } from '../dtos';
import { Observable } from 'rxjs';

export abstract class PhotoService extends EntityService<Photo> {
  abstract updateTags(id: string, data: EditablePhoto): Observable<Photo>;

  abstract upload(data: UploadPhoto): Observable<HttpProgressEvent>;
}
