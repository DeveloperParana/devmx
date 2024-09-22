/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Type<T = any> extends ReturnType<FunctionConstructor> {
  new (...params: any[]): T;
}
