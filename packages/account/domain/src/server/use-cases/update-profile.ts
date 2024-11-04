import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateProfile } from '../../lib/dtos';
import { UsersService } from '../services';

export class UpdateProfileUseCase
  implements UseCase<UpdateProfile, User | null>
{
  constructor(private usersService: UsersService) {}

  async execute({ id, ...profile }: UpdateProfile) {
    return this.usersService.updateProfile(id, profile);
  }
}
