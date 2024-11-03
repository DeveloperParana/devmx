import { MessagesService } from '../services';
import {
  UseCase,
  Message,
  EditableMessage,
} from '@devmx/shared-api-interfaces';

export class CreateMessageUseCase implements UseCase<EditableMessage, Message> {
  constructor(private messagesService: MessagesService) {}

  execute(data: EditableMessage) {
    return this.messagesService.create(data);
  }
}
