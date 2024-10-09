import { Type } from './type';

type TypeOr<T, O> = Type<T> | O;

type TypeOrString<T> = TypeOr<T, string>;

export type TypeConstructorParams<T extends Type> =
  ConstructorParameters<T> extends {
    length: 1;
  }
    ? [TypeOrString<ConstructorParameters<T>[0]>]
    : ConstructorParameters<T> extends { length: 2 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>
      ]
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
    : ConstructorParameters<T> extends { length: 9 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>
      ]
    : ConstructorParameters<T> extends { length: 10 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>,
        TypeOrString<ConstructorParameters<T>[9]>
      ]
    : ConstructorParameters<T> extends { length: 11 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>,
        TypeOrString<ConstructorParameters<T>[9]>,
        TypeOrString<ConstructorParameters<T>[10]>
      ]
    : ConstructorParameters<T> extends { length: 12 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>,
        TypeOrString<ConstructorParameters<T>[9]>,
        TypeOrString<ConstructorParameters<T>[10]>,
        TypeOrString<ConstructorParameters<T>[11]>
      ]
    : ConstructorParameters<T> extends { length: 13 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>,
        TypeOrString<ConstructorParameters<T>[9]>,
        TypeOrString<ConstructorParameters<T>[10]>,
        TypeOrString<ConstructorParameters<T>[11]>,
        TypeOrString<ConstructorParameters<T>[12]>,
      ]
      : ConstructorParameters<T> extends { length: 14 }
      ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>,
        TypeOrString<ConstructorParameters<T>[9]>,
        TypeOrString<ConstructorParameters<T>[10]>,
        TypeOrString<ConstructorParameters<T>[11]>,
        TypeOrString<ConstructorParameters<T>[12]>,
        TypeOrString<ConstructorParameters<T>[13]>,
      ]
    : ConstructorParameters<T> extends { length: 15 }
    ? [
        TypeOrString<ConstructorParameters<T>[0]>,
        TypeOrString<ConstructorParameters<T>[1]>,
        TypeOrString<ConstructorParameters<T>[2]>,
        TypeOrString<ConstructorParameters<T>[3]>,
        TypeOrString<ConstructorParameters<T>[4]>,
        TypeOrString<ConstructorParameters<T>[5]>,
        TypeOrString<ConstructorParameters<T>[6]>,
        TypeOrString<ConstructorParameters<T>[7]>,
        TypeOrString<ConstructorParameters<T>[8]>,
        TypeOrString<ConstructorParameters<T>[9]>,
        TypeOrString<ConstructorParameters<T>[10]>,
        TypeOrString<ConstructorParameters<T>[11]>,
        TypeOrString<ConstructorParameters<T>[12]>,
        TypeOrString<ConstructorParameters<T>[13]>,
        TypeOrString<ConstructorParameters<T>[14]>,
      ]
    : never;
