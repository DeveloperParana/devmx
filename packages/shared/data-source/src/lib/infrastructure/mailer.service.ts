import { Transporter, createTransport, SendMailOptions } from 'nodemailer';
import { Env, MailerService } from '@devmx/shared-api-interfaces/server';
import { createServiceProvider } from '../utils';

export class MailerServiceImpl implements MailerService {
  #transporter: Transporter;

  constructor(env: Env) {
    this.#transporter = createTransport(env.smtp);
  }

  send(options: SendMailOptions) {
    return this.#transporter.sendMail(options);
  }
}

export function provideMailerService() {
  return createServiceProvider(MailerService, MailerServiceImpl, [Env]);
}
