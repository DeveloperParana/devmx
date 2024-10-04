import { Presentation } from '../entities';

export type PresentationRef = Pick<
  Presentation,
  'id' | 'title' | 'description' | 'cover'
>;
