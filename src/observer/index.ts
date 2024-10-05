import { AuctionManager } from "./AuctionManager";
import { Bidder } from "./Bidder";

function main() {
  const auctionManager = new AuctionManager();

  const bob = new Bidder("Bob");
  const alice = new Bidder("Alice");

  auctionManager.subscribe(bob);
  auctionManager.subscribe(alice);

  bob.placeBid(auctionManager, 100);
  alice.placeBid(auctionManager, 200);

  auctionManager.unsubscribe(bob);
  bob.placeBid(auctionManager, 300);
}

main();
