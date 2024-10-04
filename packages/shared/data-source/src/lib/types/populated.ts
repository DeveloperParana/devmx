import { Types } from 'mongoose';

export type Populated<T> = T extends Types.ObjectId ? never : T;
