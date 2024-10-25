type Relation<K extends keyof T, T> = [K, (keyof T[K])[]];

export type Populate<T> = Array<{
  [K in keyof T]: T[K] extends { id: string }
    ? Relation<K, T>
    : T[K] extends Array<infer U>
    ? U extends { id: string }
      ? Relation<K, T>
      : never
    : never
}[keyof T]>;

