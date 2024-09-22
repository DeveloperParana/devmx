import { Type } from './type';

type TypeOr<T, O> = Type<T> | O

type TypeOrString<T> = TypeOr<T, string>

export type TypeConstructorParams<T extends Type> =
  ConstructorParameters<T> extends {
    length: 1;
  }
    ? [TypeOrString<ConstructorParameters<T>[0]>]
    : ConstructorParameters<T> extends { length: 2 }
    ? [TypeOrString<ConstructorParameters<T>[0]>, TypeOrString<ConstructorParameters<T>[1]>]
    : ConstructorParameters<T> extends { length: 3 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>
      ]
    : ConstructorParameters<T> extends { length: 4 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>
      ]
    : ConstructorParameters<T> extends { length: 5 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>
      ]
    : ConstructorParameters<T> extends { length: 6 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>
      ]
    : ConstructorParameters<T> extends { length: 7 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>
      ]
    : ConstructorParameters<T> extends { length: 8 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>
      ]
    : never;
