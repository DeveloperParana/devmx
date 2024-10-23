import { Type } from './type';

export type TypeConstructorParams<T extends Type> =
  ConstructorParameters<T> extends {
    length: 1;
  }
    ? [Type<ConstructorParameters<T>[0]> | string]
    : ConstructorParameters<T> extends { length: 2 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string
      ]
    : ConstructorParameters<T> extends { length: 3 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string
      ]
    : ConstructorParameters<T> extends { length: 4 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string
      ]
    : ConstructorParameters<T> extends { length: 5 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string
      ]
    : ConstructorParameters<T> extends { length: 6 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string
      ]
    : ConstructorParameters<T> extends { length: 7 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string
      ]
    : ConstructorParameters<T> extends { length: 8 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string
      ]
    : ConstructorParameters<T> extends { length: 9 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string
      ]
    : ConstructorParameters<T> extends { length: 10 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string,
        Type<ConstructorParameters<T>[9]> | string
      ]
    : ConstructorParameters<T> extends { length: 11 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string,
        Type<ConstructorParameters<T>[9]> | string,
        Type<ConstructorParameters<T>[10]> | string
      ]
    : ConstructorParameters<T> extends { length: 12 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string,
        Type<ConstructorParameters<T>[9]> | string,
        Type<ConstructorParameters<T>[10]> | string,
        Type<ConstructorParameters<T>[11]> | string
      ]
    : ConstructorParameters<T> extends { length: 13 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string,
        Type<ConstructorParameters<T>[9]> | string,
        Type<ConstructorParameters<T>[10]> | string,
        Type<ConstructorParameters<T>[11]> | string,
        Type<ConstructorParameters<T>[12]> | string
      ]
    : ConstructorParameters<T> extends { length: 14 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string,
        Type<ConstructorParameters<T>[9]> | string,
        Type<ConstructorParameters<T>[10]> | string,
        Type<ConstructorParameters<T>[11]> | string,
        Type<ConstructorParameters<T>[12]> | string,
        Type<ConstructorParameters<T>[13]> | string
      ]
    : ConstructorParameters<T> extends { length: 15 }
    ? [
        Type<ConstructorParameters<T>[0]> | string,
        Type<ConstructorParameters<T>[1]> | string,
        Type<ConstructorParameters<T>[2]> | string,
        Type<ConstructorParameters<T>[3]> | string,
        Type<ConstructorParameters<T>[4]> | string,
        Type<ConstructorParameters<T>[5]> | string,
        Type<ConstructorParameters<T>[6]> | string,
        Type<ConstructorParameters<T>[7]> | string,
        Type<ConstructorParameters<T>[8]> | string,
        Type<ConstructorParameters<T>[9]> | string,
        Type<ConstructorParameters<T>[10]> | string,
        Type<ConstructorParameters<T>[11]> | string,
        Type<ConstructorParameters<T>[12]> | string,
        Type<ConstructorParameters<T>[13]> | string,
        Type<ConstructorParameters<T>[14]> | string
      ]
    : never;
