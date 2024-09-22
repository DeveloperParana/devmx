/* eslint-disable @typescript-eslint/no-explicit-any */

export type Abstract<T = any> = abstract new (...params: any[]) => T;
