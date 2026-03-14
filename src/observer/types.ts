export interface Observer<T> {
  update(data: T): void;
}

export interface Subject<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(): void;
}

export interface Bid {
  bidder: string;
  amount: number;
}
