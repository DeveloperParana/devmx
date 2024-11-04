export type QueryFilter<T> = {
  [P in keyof T]?: T[P] extends object
    ? QueryFilter<T[P]> | string | boolean | RegExp
    : Partial<T[P]> | string | RegExp;
};
