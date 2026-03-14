import { Bid, Biddable, Observer } from "./types";

export class Bidder implements Observer<Bid> {
  constructor(private readonly name: string) {}

  update(bid: Bid) {
    console.log(`${this}: Latest bid -> ${bid.bidder} - ${bid.amount}$`);
  }

  placeBid(auction: Biddable, amount: number) {
    auction.placeBid({ bidder: this.name, amount });
  }

  toString() {
    return this.name;
  }
}
