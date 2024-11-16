import { HttpProgressEvent } from '@devmx/shared-api-interfaces/client';
import { UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';
import { UploadPhoto } from '../dtos';

export class UploadPhotoUseCase
  implements UseCase<UploadPhoto, HttpProgressEvent>
{
  constructor(private albumService: AlbumService) {}

  execute(data: UploadPhoto) {
    return this.albumService.upload(data);
  }
  // constructor(private photoService: PhotoService) {}

  // execute(data: UploadPhoto) {
  //   return this.photoService.upload(data);
  // }
}
