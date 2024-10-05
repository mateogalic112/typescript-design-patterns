export interface Observer {
  notify(data: Subject): void;
}

export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

export class AuctionManager implements Subject {
  private observers: Observer[] = [];
  private latestBid = {
    bidder: "",
    amount: 0,
  };

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => observer !== o);
  }

  notify(): void {
    this.observers.forEach((observer) => observer.notify(this));
  }

  placeBid(amount: number, bidder: string): void {
    if (amount > this.latestBid.amount) {
      this.latestBid = { bidder, amount };
      this.notify();
    }
  }

  getLatestBid() {
    return this.latestBid;
  }
}
