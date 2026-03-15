import { type Iterator } from "./Iterator";

export interface IIterator<T> {
  next(): T;
  hasNext(): boolean;
  reset(): void;
}

export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}
