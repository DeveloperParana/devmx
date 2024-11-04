import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateProfile } from '../../lib/dtos';
import { UserService } from '../services';

export class UpdateProfileUseCase
  implements UseCase<UpdateProfile, User | null>
{
  constructor(private userService: UserService) {}

  execute(data: UpdateProfile) {
    return this.userService.updateProfile(data);
  }
}
