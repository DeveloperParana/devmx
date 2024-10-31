import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Photo } from '@devmx/shared-api-interfaces';
import { PhotoFile } from '../dtos';

export abstract class PhotosService extends EntityService<Photo> {
  abstract savePhoto(album: string, file: PhotoFile): Promise<Photo>
}
