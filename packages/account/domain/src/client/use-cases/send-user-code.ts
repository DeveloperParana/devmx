import { ResponseMessage, UseCase } from '@devmx/shared-api-interfaces';
import { AuthenticationService } from '../services';
import { SendUserCode } from '../../lib/dtos';

export class SendUserCodeUseCase
  implements UseCase<SendUserCode, ResponseMessage>
{
  constructor(private authenticationService: AuthenticationService) {}

  execute({ name }: SendUserCode) {
    return this.authenticationService.sendUserCode(name);
  }
}
