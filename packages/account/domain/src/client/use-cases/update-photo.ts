import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdatePhoto } from '../../lib/dtos';
import { UserService } from '../services';

export class UpdatePhotoUseCase implements UseCase<UpdatePhoto, User | null> {
  constructor(private userService: UserService) {}

  execute(data: UpdatePhoto) {
    return this.userService.updatePhoto(data);
  }
}
