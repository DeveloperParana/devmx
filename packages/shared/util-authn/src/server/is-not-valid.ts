/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fn } from '../types/index';
import { isValid } from './is-valid';

export async function isNotValid<T extends Fn | string>(
  validator: T,
  value: string
) {
  return !(await isValid(validator, value));
}
