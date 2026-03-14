export interface Observer<T> {
  update(data: T): boolean;
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

export interface Biddable {
  placeBid(bid: Bid): void;
}
