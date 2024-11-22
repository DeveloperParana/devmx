import { createCode, createMail, hideEmail } from '@devmx/shared-util-data';
import { ResponseMessage, UseCase } from '@devmx/shared-api-interfaces';
import { Env, MailerService } from '@devmx/shared-api-interfaces/server';
import { AuthenticationError } from '@devmx/shared-util-errors';
import { UsersService } from '../services';

export class SendUserCodeUseCase implements UseCase<string, ResponseMessage> {
  constructor(
    private usersService: UsersService,
    private mailerService: MailerService,
    private env: Env
  ) {}

  async execute(name: string) {
    const user = await this.usersService.findOneBy('name', name);

    if (!user) {
      throw new AuthenticationError();
    }

    const code = { value: createCode(), timestamp: new Date() };

    await this.usersService.updateCode(user.id, code);

    const mail = createMail(
      user.contact.email,
      `<h2>${code.value}</h2>`,
      `Código de autenticação`
    );

    if (this.env.production) {
      await this.mailerService.send(mail);
      return { message: `Enviado para ${hideEmail(user.contact.email)}` };
    } else {
      return { message: `Fala Dev! Usa esse código aqui: ${code.value}` };
    }
  }
}
