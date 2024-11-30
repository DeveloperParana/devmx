import { Gender } from '../types';
import { City } from './city';

export interface UserProfile {
  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: Date;

  city?: City;
}
