import { IIterator } from "./types";

export class Iterator<T> implements IIterator<T> {
  constructor(
    private readonly items: T[] = [],
    private index = 0
  ) {}

  next() {
    if (!this.hasNext()) {
      throw new Error("At End of Iterator");
    }

    const item = this.items[this.index];
    this.index += 1;

    return item;
  }

  current() {
    if (!this.hasNext()) {
      throw new Error("At End of Iterator");
    }

    return this.items[this.index];
  }

  hasNext() {
    return this.index < this.items.length;
  }

  reset() {
    this.index = 0;
  }
}
