import { PresentationFormat } from '../types/presentation-format';

export interface Presentation {
  id: string;

  title: string;

  description: string;

  format: PresentationFormat;

  tags: string[];

  resources: string[];

  visible: boolean;
}
