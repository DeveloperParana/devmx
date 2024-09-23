import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { AccountService } from '../services';

export class UploadPhotoUseCase implements UseCase<Blob, AccountOut> {
  constructor(private accountService: AccountService) {}

  execute(photo: Blob) {
    return this.accountService.upload(photo);
  }
}
