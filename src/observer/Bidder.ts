import { Bid, Biddable, Observer } from "./types";

export class Bidder implements Observer<Bid> {
  constructor(
    private readonly name: string,
    private readonly messages: string[] = []
  ) {}

  update(bid: Bid) {
    this.messages.push(`${this}: Latest bid -> ${bid.bidder} - ${bid.amount}$`);
    return true;
  }

  placeBid(auction: Biddable, amount: number) {
    auction.placeBid({ bidder: this.name, amount });
  }

  toString() {
    return this.name;
  }

  getMessages() {
    return this.messages;
  }
}
