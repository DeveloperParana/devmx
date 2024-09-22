export type QueryFilter<T> = {
  [P in keyof T]?: Partial<T[P]> | string | RegExp;
};
