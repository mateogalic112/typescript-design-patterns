import { Bid, Biddable, Observer, Subject } from "./types";

export class Auction implements Subject<Bid>, Biddable {
  private observers: Observer<Bid>[] = [];
  private latestBid: Bid = {
    bidder: "",
    amount: 0,
  };

  subscribe(observer: Observer<Bid>): void {
    if (this.observers.includes(observer)) return;
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<Bid>): void {
    this.observers = this.observers.filter((o) => observer !== o);
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this.latestBid));
  }

  placeBid(bid: Bid): void {
    if (bid.amount > this.latestBid.amount) {
      this.latestBid = bid;
      this.notify();
    }
  }
}
