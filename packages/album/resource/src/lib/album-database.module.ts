import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  AlbumSchema,
  provideAlbums,
  AlbumCollection,
  PhotoCollection,
  PhotoSchema,
} from '@devmx/album-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AlbumCollection.name,
        schema: AlbumSchema,
      },
      {
        name: PhotoCollection.name,
        schema: PhotoSchema,
      },
    ]),
  ],
  providers: [...provideAlbums()],
  exports: [...provideAlbums()],
})
export class AlbumDatabaseModule {}
