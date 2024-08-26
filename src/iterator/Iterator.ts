interface IIterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class Iterator<T> implements IIterator<T> {
  items: T[];
  index: number;

  constructor(items: T[]) {
    this.index = 0;
    this.items = items;
  }

  next() {
    if (!this.hasNext()) throw new Error("At End of Iterator");

    const item = this.items[this.index];
    this.index += 1;
    return item;
  }

  hasNext() {
    return this.index < this.items.length;
  }
}
