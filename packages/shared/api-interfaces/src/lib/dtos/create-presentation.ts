import { ConvertRelationsToID } from '../types';
import { Presentation } from '../entities';

export type CreatePresentation = ConvertRelationsToID<Omit<Presentation, 'id'>>;
