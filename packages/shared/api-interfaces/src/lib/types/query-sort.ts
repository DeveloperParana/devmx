import { SortDirection } from "./sort-direction";

type NonObjectKeys<T> = {
  [K in keyof T]: T[K] extends object ? never : K;
}[keyof T];

type OnlyChildren<T> = Pick<T, NonObjectKeys<T>>;

export type QuerySort<T> = {
  [P in keyof OnlyChildren<T>]?: SortDirection;
};
