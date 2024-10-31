import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { EditableEntity } from '@devmx/shared-api-interfaces';
import { AlbumsService } from '@devmx/album-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { AlbumCollection } from '../schemas';
import { Query } from 'mongoose';

export class AlbumsMongoServiceImpl
  extends MongoService<AlbumCollection>
  implements AlbumsService
{
  protected override applyPopulate<U>(query: Query<U, AlbumCollection>) {
    return query
      .populate('owner', 'name username photo')
      .populate('contributors')
      .populate('photos');
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<AlbumCollection>
  ): U {
    const contributors = (data.contributors ?? []).map((p) => {
      return typeof p === 'string' ? p : p.id;
    });

    const photos = (data.photos ?? []).map((p) => {
      return typeof p === 'string' ? p : p.id;
    });

    return { ...data, photos, contributors } as U;
  }
}

export function provideAlbumsMongoService() {
  return createServiceProvider(AlbumsService, AlbumsMongoServiceImpl, [
    getModelToken(AlbumCollection.name),
  ]);
}
