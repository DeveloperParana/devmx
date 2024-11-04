import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateSocial } from '../../lib/dtos';
import { UsersService } from '../services';

export class UpdateSocialUseCase implements UseCase<UpdateSocial, User | null> {
  constructor(private usersService: UsersService) {}

  async execute({ id, social }: UpdateSocial) {
    return this.usersService.updateSocial(id, social);
  }
}
