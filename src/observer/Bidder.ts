import { AuctionManager } from "./AuctionManager";
import { Observer, Subject } from "./types";

export class Bidder implements Observer {
  constructor(private name: string) {}

  notify(subject: Subject): void {
    if (subject instanceof AuctionManager) {
      console.log(
        `Latest bid -> ${subject.getLatestBidder()} - ${subject.getLatestBid()}$`
      );
    }
  }

  placeBid(subject: Subject, amount: number): void {
    if (subject instanceof AuctionManager) {
      subject.placeBid(amount, this.name);
    }
  }
}
