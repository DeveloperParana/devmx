import { Abstract } from './abstract';
import { Type } from './type';

export type AbstractConstructorParams<T extends Type> =
  ConstructorParameters<T> extends {
    length: 1;
  }
    ? [Abstract<ConstructorParameters<T>[0]>]
    : ConstructorParameters<T> extends { length: 2 }
    ? [
        Abstract<ConstructorParameters<T>[0]>,
        Abstract<ConstructorParameters<T>[1]>
      ]
    : ConstructorParameters<T> extends { length: 3 }
    ? [
        Abstract<ConstructorParameters<T>[0]>,
        Abstract<ConstructorParameters<T>[1]>,
        Abstract<ConstructorParameters<T>[2]>
      ]
    : ConstructorParameters<T> extends { length: 4 }
    ? [
        Abstract<ConstructorParameters<T>[0]>,
        Abstract<ConstructorParameters<T>[1]>,
        Abstract<ConstructorParameters<T>[2]>,
        Abstract<ConstructorParameters<T>[3]>
      ]
    : ConstructorParameters<T> extends { length: 5 }
    ? [
        Abstract<ConstructorParameters<T>[0]>,
        Abstract<ConstructorParameters<T>[1]>,
        Abstract<ConstructorParameters<T>[2]>,
        Abstract<ConstructorParameters<T>[3]>,
        Abstract<ConstructorParameters<T>[4]>
      ]
    : [];
