import { Abstract } from './abstract';
import { Type } from './type';

export type AbstractConstructorParams<T extends Type> =
  ConstructorParameters<T> extends {
    length: 1;
  }
    ? [Abstract<ConstructorParameters<T>[0]> | string]
    : ConstructorParameters<T> extends { length: 2 }
    ? [
        Abstract<ConstructorParameters<T>[0]> | string,
        Abstract<ConstructorParameters<T>[1]> | string
      ]
    : ConstructorParameters<T> extends { length: 3 }
    ? [
        Abstract<ConstructorParameters<T>[0]> | string,
        Abstract<ConstructorParameters<T>[1]> | string,
        Abstract<ConstructorParameters<T>[2]> | string
      ]
    : ConstructorParameters<T> extends { length: 4 }
    ? [
        Abstract<ConstructorParameters<T>[0]> | string,
        Abstract<ConstructorParameters<T>[1]> | string,
        Abstract<ConstructorParameters<T>[2]> | string,
        Abstract<ConstructorParameters<T>[3]> | string
      ]
    : ConstructorParameters<T> extends { length: 5 }
    ? [
        Abstract<ConstructorParameters<T>[0]> | string,
        Abstract<ConstructorParameters<T>[1]> | string,
        Abstract<ConstructorParameters<T>[2]> | string,
        Abstract<ConstructorParameters<T>[3]> | string,
        Abstract<ConstructorParameters<T>[4]> | string
      ]
    : [];
