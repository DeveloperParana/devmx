import { AlbumsController, PhotosController } from './controllers';
import { AlbumDatabaseModule } from './album-database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AlbumDatabaseModule],
  controllers: [AlbumsController, PhotosController],
})
export class AlbumResourceModule {}
