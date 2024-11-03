import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  MessageService,
  CreateMessageUseCase,
  FindMessageByIDUseCase,
  FindMessagesUseCase,
  DeleteMessageUseCase,
  UpdateMessageUseCase,
} from '@devmx/message-domain/client';

export function provideCreateMessageUseCase() {
  return createUseCaseProvider(CreateMessageUseCase, [MessageService]);
}

export function provideFindMessagesUseCase() {
  return createUseCaseProvider(FindMessagesUseCase, [MessageService]);
}

export function provideFindMessageByIDUseCase() {
  return createUseCaseProvider(FindMessageByIDUseCase, [MessageService]);
}

export function provideUpdateMessageUseCase() {
  return createUseCaseProvider(UpdateMessageUseCase, [MessageService]);
}

export function provideDeleteMessageUseCase() {
  return createUseCaseProvider(DeleteMessageUseCase, [MessageService]);
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
