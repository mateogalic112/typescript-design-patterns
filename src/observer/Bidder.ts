import { AuctionManager } from "./AuctionManager";
import { Bid, Observer } from "./types";

export class Bidder implements Observer<Bid> {
  constructor(private readonly name: string) {}

  update(bid: Bid) {
    console.log(`${this}: Latest bid -> ${bid.bidder} - ${bid.amount}$`);
  }

  placeBid(subject: AuctionManager, amount: number) {
    subject.placeBid(amount, this.name);
  }

  toString() {
    return this.name;
  }
}
