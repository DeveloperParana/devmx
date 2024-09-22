import { PresentationFormat } from '../types';
import { AccountOut } from './account-out';

export interface PresentationOut {
  id: string;

  title: string;

  description: string;

  format: PresentationFormat;

  tags: string[];

  resources: string[];

  visible: boolean;

  account: AccountOut;
}
