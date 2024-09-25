export type MessageType = 'info' | 'warn' | 'error';

export interface MessageData {
  type?: MessageType;
  message: string;
}
