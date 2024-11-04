import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdatePassword } from '../../lib/dtos';
import { UserService } from '../services';

export class UpdatePasswordUseCase
  implements UseCase<UpdatePassword, User | null>
{
  constructor(private userService: UserService) {}

  execute(data: UpdatePassword) {
    return this.userService.updatePassword(data);
  }
}
