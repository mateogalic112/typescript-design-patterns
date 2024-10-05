import { AuctionManager, Observer } from "./AuctionManager";

export class Bidder implements Observer {
  constructor(private name: string) {}

  notify(subject: AuctionManager) {
    const { bidder, amount } = subject.getLatestBid();
    console.log(`Latest bid -> ${bidder} - ${amount}$`);
  }

  placeBid(subject: AuctionManager, amount: number) {
    subject.placeBid(amount, this.name);
  }
}
