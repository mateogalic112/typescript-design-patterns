import { AuctionManager } from "./AuctionManager";
import { Bidder } from "./Bidder";

function main() {
  const auctionManager = new AuctionManager();

  const bob = new Bidder("Bob");
  const alice = new Bidder("Alice");
  const john = new Bidder("John");

  auctionManager.registerObserver(bob);
  auctionManager.registerObserver(alice);
  auctionManager.registerObserver(john);

  bob.placeBid(auctionManager, 100);
  alice.placeBid(auctionManager, 200);

  auctionManager.removeObserver(john);
  bob.placeBid(auctionManager, 300);
}

main();
