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
  protected override applyPopulate<U>(
    query: Query<U, AlbumCollection>,
    method: 'find' | 'findOne'
  ) {
    query = query
      .populate({
        path: 'owner',
        select: 'name displayName',
      })
      .populate('contributors', 'name displayName');

    if (method === 'findOne') {
      query = query.populate('photos', 'type content caption createdAt');
    } else {
      query = query.select('-photos');
    }

    return query;
  }

  protected override applyEditableParser<U>({
    photos: photosAux,
    ...data
  }: EditableEntity<AlbumCollection>): U {
    const contributors = (data.contributors ?? []).map((contributor) => {
      return typeof contributor === 'string' ? contributor : contributor.id;
    });

    const photos = (photosAux ?? []).map((photo) => {
      return typeof photo === 'string' ? photo : photo.id;
    });

    if (photos.length || !data.id) {
      data = Object.assign(data, { photos });
    }

    const owner = typeof data.owner === 'string' ? data.owner : data.owner.id;

    return { ...data, owner, contributors } as U;
  }
}

export function provideAlbumsMongoService() {
  return createServiceProvider(AlbumsService, AlbumsMongoServiceImpl, [
    getModelToken(AlbumCollection.name),
  ]);
}
