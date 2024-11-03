import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CreateMessageUseCase,
  MessagesService,
  FindMessageByIDUseCase,
  FindMessagesUseCase,
  DeleteMessageUseCase,
  UpdateMessageUseCase,
} from '@devmx/message-domain/server';

export function provideCreateMessageUseCase() {
  return createUseCaseProvider(CreateMessageUseCase, [MessagesService]);
}

export function provideFindMessagesUseCase() {
  return createUseCaseProvider(FindMessagesUseCase, [MessagesService]);
}

export function provideFindMessageByIDUseCase() {
  return createUseCaseProvider(FindMessageByIDUseCase, [MessagesService]);
}

export function provideUpdateMessageUseCase() {
  return createUseCaseProvider(UpdateMessageUseCase, [MessagesService]);
}

export function provideDeleteMessageUseCase() {
  return createUseCaseProvider(DeleteMessageUseCase, [MessagesService]);
}


export function provideUseCases() {
  return [
    provideCreateMessageUseCase(),
    provideFindMessagesUseCase(),
    provideFindMessageByIDUseCase(),
    provideUpdateMessageUseCase(),
    provideDeleteMessageUseCase(),
  ];
}
