import { MessageService } from '../services';
import {
  Page,
  UseCase,
  Message,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindMessagesUseCase
  implements UseCase<QueryParams<Message>, Page<Message>>
{
  constructor(private messageService: MessageService) {}

  execute(params: QueryParams<Message>) {
    return this.messageService.find(params);
  }
}
