import { AccountRef } from '../dtos';
import { Photo } from './photo';

export interface Album {
  id: string;

  title: string;

  photos: Photo[];

  contributors?: AccountRef[]

  createdAt: Date
}
