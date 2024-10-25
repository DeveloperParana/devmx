interface Reject {
  (reason?: Error | DOMException | null): void;
}

interface Resolve<T> {
  (value: T | PromiseLike<T>): void;
}

export interface AsyncCallback<T> {
  (resolve: Resolve<T>, reject: Reject): void;
}

export const async = <T>(executor: AsyncCallback<T>) => {
  return new Promise<T>(executor);
};

export const asyncAll = <T>(executors: PromiseLike<T>[]) => {
  return Promise.all<T>(executors);
};

export const forceAsync = (handler: VoidFunction, ms = 500) => {
  return async<void>((resolve) => setTimeout(() => resolve(handler()), ms));
};
