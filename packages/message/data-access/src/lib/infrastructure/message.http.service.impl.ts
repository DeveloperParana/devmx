import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { MessageService } from '@devmx/message-domain/client';
import { Message } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';

export class MessageHttpServiceImpl
  extends HttpService<Message>
  implements MessageService {}

export function provideMessageHttpService() {
  return {
    provide: MessageService,
    useFactory(http: HttpClient, env: Env) {
      return new MessageHttpServiceImpl(http, env, 'messages');
    },
    deps: [HttpClient, Env],
  };
}
