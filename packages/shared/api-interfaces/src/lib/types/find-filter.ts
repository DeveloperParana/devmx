type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}.${NestedKeys<T[K]>}`
    : K & string;
}[keyof T];

export type FindFilter<T> = {
  [K in NestedKeys<T>]?: string | RegExp | number | boolean | undefined;
};
