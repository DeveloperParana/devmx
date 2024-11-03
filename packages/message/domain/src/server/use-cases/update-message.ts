import {
  UseCase,
  Message,
  EditableMessage,
} from '@devmx/shared-api-interfaces';
import { MessagesService } from '../services';

export class UpdateMessageUseCase implements UseCase<EditableMessage, Message> {
  constructor(private messagesService: MessagesService) {}

  async execute(data: EditableMessage) {
    return this.messagesService.update(data.id, data);
  }
}
