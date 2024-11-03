import { MessageService } from '../services';
import {
  UseCase,
  Message,
  EditableMessage,
} from '@devmx/shared-api-interfaces';

export class UpdateMessageUseCase implements UseCase<EditableMessage, Message> {
  constructor(private messageService: MessageService) {}

  execute(data: EditableMessage) {
    return this.messageService.update(data.id, data);
  }
}
