import { UserRef } from '../dtos';
import { Photo } from './photo';

export interface Album {
  id: string;

  title: string;

  photos: Photo[];

  cover?: Photo;

  contributors?: UserRef[];

  createdAt: Date;
}
