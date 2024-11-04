import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateSocial } from '../../lib/dtos';
import { UserService } from '../services';

export class UpdateSocialUseCase implements UseCase<UpdateSocial, User | null> {
  constructor(private userService: UserService) {}

  execute(data: UpdateSocial) {
    return this.userService.updateSocial(data);
  }
}
