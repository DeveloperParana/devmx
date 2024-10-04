export type ConvertRelationsToID<T> = {
  [K in keyof T]: T[K] extends Array<{ id: infer U }> | undefined
    ? U[]
    : T[K] extends { id: infer U } | { id: infer U } | undefined
    ? U
    : T[K];
};
