import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { Message, EditableMessage } from '@devmx/shared-api-interfaces';
import {
  CreateMessageUseCase,
  DeleteMessageUseCase,
  FindMessageByIDUseCase,
  FindMessagesUseCase,
  UpdateMessageUseCase,
} from '@devmx/message-domain/client';

export class MessageFacade extends EntityFacade<Message> {
  constructor(
    private createMessageUseCase: CreateMessageUseCase,
    private findMessagesUseCase: FindMessagesUseCase,
    private findMessageByIdUseCase: FindMessageByIDUseCase,
    private updateMessageUseCase: UpdateMessageUseCase,
    private deleteMessageUseCase: DeleteMessageUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { text: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findMessagesUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findMessageByIdUseCase.execute(id));
  }

  create(data: EditableMessage) {
    this.onCreate(this.createMessageUseCase.execute(data));
  }

  update(data: EditableMessage) {
    this.onUpdate(this.updateMessageUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteMessageUseCase.execute(id));
  }
}

export function provideMessageFacade() {
  return createClientProvider(MessageFacade, [
    CreateMessageUseCase,
    FindMessagesUseCase,
    FindMessageByIDUseCase,
    UpdateMessageUseCase,
    DeleteMessageUseCase,
  ]);
}
