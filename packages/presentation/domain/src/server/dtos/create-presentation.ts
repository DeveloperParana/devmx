import { PresentationFormat } from '@devmx/shared-api-interfaces';

export interface CreatePresentation {
  title: string;

  description: string;

  format: PresentationFormat;

  tags?: string[];

  resources?: string[];

  cover?: string;

  video?: string;

  visible: boolean;

  owner: string;
}
