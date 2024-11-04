import { SendMail } from '../dtos';

export abstract class MailerService {
  abstract send(data: SendMail): Promise<void>;
}
