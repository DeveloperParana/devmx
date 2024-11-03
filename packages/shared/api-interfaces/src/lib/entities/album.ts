import { AccountRef } from '../dtos';
import { Photo } from './photo';

export interface Album {
  id: string;

  title: string;

  photos: Photo[];

  cover?: Photo;

  contributors?: AccountRef[];

  createdAt: Date;
}
