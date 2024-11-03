import { Message, UseCase } from '@devmx/shared-api-interfaces';
import { MessagesService } from '../services';

export class DeleteMessageUseCase implements UseCase<string, Message> {
  constructor(private messagesService: MessagesService) {}

  async execute(id: string) {
    return this.messagesService.delete(id);
  }
}
