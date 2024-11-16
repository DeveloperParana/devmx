import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Photo } from '@devmx/shared-api-interfaces';

export abstract class PhotosService extends EntityService<Photo> {
  // abstract addPhoto(albumId: string, photoFile: PhotoFile): Promise<Photo>;
}
