export type ExtractID<T> = T extends { id: infer U } ? U : T;
