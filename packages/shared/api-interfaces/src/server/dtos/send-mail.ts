import { SendMailOptions } from 'nodemailer';

export type SendMail = Pick<
  SendMailOptions,
  | 'attachDataUrls'
  | 'attachments'
  | 'replyTo'
  | 'subject'
  | 'text'
  | 'from'
  | 'html'
  | 'amp'
  | 'to'
>;
