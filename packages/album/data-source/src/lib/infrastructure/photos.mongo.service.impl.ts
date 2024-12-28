import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { EditableEntity } from '@devmx/shared-api-interfaces';
import { PhotosService } from '@devmx/album-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { PhotoCollection } from '../schemas';
import { Query } from 'mongoose';

export class PhotosMongoServiceImpl
  extends MongoService<PhotoCollection>
  implements PhotosService
{
  protected override applyPopulate<U>(query: Query<U, PhotoCollection>) {
    return query
      .populate('owner', 'name displayName')
      .populate('album', 'title createdAt')
      .populate('tags');
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<PhotoCollection>
  ): U {
    // const tagged = (data.tags ?? []).map((p) => {
    //   return typeof p === 'string' ? p : p.id;
    // });

    const album = typeof data.album === 'string' ? data.album : data.album.id;

    const owner = typeof data.owner === 'string' ? data.owner : data.owner.id;

    return { ...data, album, owner } as U;
  }
}

export function providePhotosMongoService() {
  return createServiceProvider(PhotosService, PhotosMongoServiceImpl, [
    getModelToken(PhotoCollection.name),
  ]);
}
