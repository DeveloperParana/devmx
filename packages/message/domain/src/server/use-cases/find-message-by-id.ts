import { Message, UseCase } from '@devmx/shared-api-interfaces';
import { MessagesService } from '../services';

export class FindMessageByIDUseCase implements UseCase<string, Message | null> {
  constructor(private messagesService: MessagesService) {}

  async execute(id: string) {
    return this.messagesService.findOne(id);
  }
}
