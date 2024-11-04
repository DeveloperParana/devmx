import { SendMailOptions } from 'nodemailer';

export type SendMail = Pick<
  SendMailOptions,
  'from' | 'html' | 'replyTo' | 'subject' | 'text' | 'to'
>;
