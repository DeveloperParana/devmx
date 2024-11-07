import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { EditableEntity } from '@devmx/shared-api-interfaces';
import { PhotoFile, PhotosService } from '@devmx/album-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { PhotoCollection } from '../schemas';
import { Query } from 'mongoose';

export class PhotosMongoServiceImpl
  extends MongoService<PhotoCollection>
  implements PhotosService
{
  savePhoto(album: string, file: PhotoFile) {
    const photo = new this.entityModel({
      content: file.buffer,
      album,
      type: file.mimetype,
    });
    return photo.save();
  }

  protected override applyPopulate<U>(query: Query<U, PhotoCollection>) {
    return query.populate('album', 'title');
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<PhotoCollection>
  ): U {
    const album = typeof data.album === 'string' ? data.album : data.album.id;

    return { ...data, album } as U;
  }
}

export function providePhotosMongoService() {
  return createServiceProvider(PhotosService, PhotosMongoServiceImpl, [
    getModelToken(PhotoCollection.name),
  ]);
}
