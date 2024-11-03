import { Message, UseCase } from '@devmx/shared-api-interfaces';
import { MessageService } from '../services';

export class FindMessageByIDUseCase implements UseCase<string, Message | null> {
  constructor(private messageService: MessageService) {}

  execute(id: string) {
    return this.messageService.findOne(id);
  }
}
