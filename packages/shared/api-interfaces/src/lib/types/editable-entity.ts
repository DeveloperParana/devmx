export type EditableEntity<T> = Omit<
  {
    [K in keyof T]: T[K] extends Array<infer U>
      ? U extends { id: string; createdAt: Date; updatedAt: Date }
        ? EditableEntity<Omit<U, 'createdAt' | 'updatedAt'>>[]
        : U[]
      : T[K] extends { id: string; createdAt: Date; updatedAt: Date }
      ? EditableEntity<Omit<T[K], 'createdAt' | 'updatedAt'>>
      : T[K] extends string
      ? T[K] | string
      : T[K];
  },
  'createdAt' | 'updatedAt'
>;
