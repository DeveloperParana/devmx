import { Album } from '../entities';

export type AlbumRef = Pick<Album, 'title' | 'createdAt' | 'id'>;
