import { Message, UseCase } from '@devmx/shared-api-interfaces';
import { MessageService } from '../services';

export class DeleteMessageUseCase implements UseCase<string, Message | null> {
  constructor(private messageService: MessageService) {}

  execute(id: string) {
    return this.messageService.delete(id);
  }
}
