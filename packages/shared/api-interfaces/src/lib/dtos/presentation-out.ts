import { PresentationFormat } from '../types';
import { AccountRef } from './account-ref';

export interface PresentationOut {
  id: string;

  title: string;

  description: string;

  format: PresentationFormat;

  tags: string[];

  resources: string[];

  visible: boolean;

  owner: AccountRef;
}
