export type PresentationFormat = 'talk' | 'workshop' | 'webinar';

export class PresentationEntity {
  id: string

  title: string;

  description: string;

  format: PresentationFormat;

  tags: string[];

  resources: string[];

  visible: boolean;
}
