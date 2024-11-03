import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Message } from '@devmx/shared-api-interfaces';

export abstract class MessagesService extends EntityService<Message> {
  abstract getBetweenUsers(
    account1: string,
    account2: string
  ): Promise<Message[]>;

  abstract confirmRead(id: string): Promise<Message | null>;
}
