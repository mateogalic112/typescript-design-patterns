// The Iterator Pattern Concept

interface IIterator<T> {
  // Return the object in collection
  next(): T;

  // Returns Boolean whether at end of collection or not
  hasNext(): boolean;
}

export class Iterator<T> implements IIterator<T> {
  // The concrete iterator (iterable)
  index: number;
  items: T[];

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
