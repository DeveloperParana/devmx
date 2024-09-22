/* eslint-disable @typescript-eslint/no-explicit-any */
import { For, Provider } from './types';
import { is } from './utils';

const container = new Map();
const relations = new Map();

const provide = async <T>({ for: to, use }: Provider<T>) => {
  const type = (use ?? to) as T;

  if (is.fn(type)) {
    const deps = relations.get(to) ?? [];

    if (is.type(type)) {
      return new type(...deps);
    }

    if (is.asyncFn(type)) {
      return await type(...deps);
    }

    return type(...deps);
  }

  return type as Promise<T>;
};

export const use = <T>(key: For<T>) => {
  const provided = container.get(key);
  if (!provided) {
    throw `Provider ${key} not found`;
  }
  return provided as T;
};

export const add = async <T>(provider: Provider<T>) => {
  if (provider.add && provider.add.length > 0) {
    relations.set(
      provider.for,
      provider.add.map((dep) => use(dep))
    );
  }

  container.set(provider.for, await provide(provider));

  return use(provider.for);
};

export async function* set<T>(...providers: Provider<T | any>[]) {
  for (const provider of providers) {
    yield await add<T>(provider);
  }
}
