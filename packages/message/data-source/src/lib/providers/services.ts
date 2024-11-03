import { provideMessagesMongoService } from '../infrastructure';

export function provideServices() {
  return [provideMessagesMongoService()];
}
