import { Observer, Subject } from "./types";

export class AuctionManager implements Subject {
  private observers: Observer[] = [];
  private latestBidder = "";
  private latestBid = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) return;

    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.notify(this));
  }

  placeBid(amount: number, bidder: string): void {
    if (amount > this.latestBid) {
      this.latestBid = amount;
      this.latestBidder = bidder;
      this.notifyObservers();
    }
  }

  getLatestBid(): number {
    return this.latestBid;
  }

  getLatestBidder(): string {
    return this.latestBidder;
  }
}
