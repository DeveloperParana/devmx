import { MessagesService } from '../services';
import {
  Page,
  UseCase,
  Message,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindMessagesUseCase
  implements UseCase<QueryParams<Message>, Page<Message>>
{
  constructor(private messagesService: MessagesService) {}

  async execute(params: QueryParams<Message>) {
    return this.messagesService.find(params);
  }
}
