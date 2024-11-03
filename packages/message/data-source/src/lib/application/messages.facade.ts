import { MessageDto, CreateMessageDto, UpdateMessageDto } from '../dtos';
import { Message } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateMessageUseCase,
  DeleteMessageUseCase,
  FindMessageByIDUseCase,
  FindMessagesUseCase,
  UpdateMessageUseCase,
} from '@devmx/message-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class MessagesFacade {
  constructor(
    private createMessageUseCase: CreateMessageUseCase,
    private findMessagesUseCase: FindMessagesUseCase,
    private findMessageByIDUseCase: FindMessageByIDUseCase,
    private updateMessageUseCase: UpdateMessageUseCase,
    private deleteMessageUseCase: DeleteMessageUseCase
  ) {}

  async create(data: CreateMessageDto) {
    const subject = await this.createMessageUseCase.execute(data);
    return plainToInstance(MessageDto, subject);
  }

  async find(params: QueryParamsDto<Message>) {
    const { data, items, pages } = await this.findMessagesUseCase.execute(
      params
    );
    const subjects = plainToInstance(MessageDto, data);
    return new PageDto(subjects, items, pages);
  }

  async findOne(id: string) {
    const subject = await this.findMessageByIDUseCase.execute(id);
    return plainToInstance(MessageDto, subject);
  }

  async update(id: string, data: UpdateMessageDto) {
    const subject = await this.updateMessageUseCase.execute({ ...data, id });
    return plainToInstance(MessageDto, subject);
  }

  async delete(id: string) {
    const subject = this.deleteMessageUseCase.execute(id);
    return plainToInstance(MessageDto, subject);
  }
}

export function provideMessagesFacade() {
  return createServerProvider(MessagesFacade, [
    CreateMessageUseCase,
    FindMessagesUseCase,
    FindMessageByIDUseCase,
    UpdateMessageUseCase,
    DeleteMessageUseCase,
  ]);
}
