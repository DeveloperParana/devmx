import { Type } from '@devmx/shared-api-interfaces';
import { Provider } from './types';

export interface AngularProvider<T = any> {
  provide: Type<T>;
  useClass?: Type<T>;
  useFactory?: (...params: unknown[]) => T;
  deps?: Type<T>[];
}

export function mapFromAngular(providers: AngularProvider[]): Provider<any>[] {
  return providers.map(({ provide, useClass, useFactory, deps }) => {
    const use = useFactory ?? useClass;
    return { for: provide, use, add: deps };
  });
}
