import { MongoService, createServiceProvider } from '@devmx/shared-data-source';
import { MessagesService } from '@devmx/message-domain/server';
import { EditableEntity } from '@devmx/shared-api-interfaces';
import { getModelToken } from '@nestjs/mongoose';
import { MessageCollection } from '../schemas';
import { Query } from 'mongoose';

export class MessagesMongoServiceImpl
  extends MongoService<MessageCollection>
  implements MessagesService
{
  async getBetweenUsers(
    account1: string,
    account2: string
  ): Promise<MessageCollection[]> {
    const messages = await this.entityModel
      .find({
        $and: [
          { sender: { $in: [account1, account2] } },
          { receiver: { $in: [account1, account2] } },
        ],
      })
      .sort({ timestamp: 1 })
      .exec();

    return messages.map((message) => message.toJSON());
  }

  async confirmRead(id: string): Promise<MessageCollection | null> {
    const message = await this.entityModel
      .findByIdAndUpdate(id, { readAt: new Date() }, { new: true })
      .exec();

    return message ? message.toJSON() : null;
  }

  protected override applyPopulate<U>(query: Query<U, MessageCollection>) {
    return query
      .populate('sender', 'name username photo')
      .populate('receiver', 'name username photo');
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<MessageCollection>
  ): U {
    const sender =
      typeof data.sender === 'string' ? data.sender : data.sender.id;

    const receiver =
      typeof data.receiver === 'string' ? data.receiver : data.receiver.id;

    return { ...data, sender, receiver } as U;
  }
}

export function provideMessagesMongoService() {
  return createServiceProvider(MessagesService, MessagesMongoServiceImpl, [
    getModelToken(MessageCollection.name),
  ]);
}
