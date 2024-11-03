import { AlbumDatabaseModule } from './album-database.module';
import { Module } from '@nestjs/common';
import { AlbumsController } from './controllers';

@Module({
  imports: [AlbumDatabaseModule],
  controllers: [AlbumsController],
})
export class AlbumResourceModule {}
