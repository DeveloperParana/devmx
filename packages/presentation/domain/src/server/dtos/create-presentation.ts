import { PresentationFormat } from '@devmx/shared-api-interfaces';

export interface CreatePresentation {
  title: string;

  description: string;

  format: PresentationFormat;

  tags?: string[];

  resources?: string[];

  visible: boolean;

  account: string;
}
