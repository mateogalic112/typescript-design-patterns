export interface Observer {
  notify(subject: Subject): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  placeBid(bid: number, bidder: string): void;
}
