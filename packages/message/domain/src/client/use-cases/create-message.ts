import { MessageService } from '../services';
import {
  UseCase,
  Message,
  EditableMessage,
} from '@devmx/shared-api-interfaces';

export class CreateMessageUseCase implements UseCase<EditableMessage, Message> {
  constructor(private messageService: MessageService) {}

  execute(data: EditableMessage) {
    return this.messageService.create(data);
  }
}
