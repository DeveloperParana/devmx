import { Photo } from './photo';

export interface Album {
  id: string;

  title: string;

  photos: Photo[];

  createdAt: Date
}
