import { PresentationFormat } from '../types';
import { AccountRef } from './account-ref';

export interface PresentationOut {
  id: string;

  title: string;

  description: string;

  format: PresentationFormat;

  cover?: string;

  video?: string;

  tags: string[];

  resources: string[];

  visible: boolean;

  owner: AccountRef;
}
