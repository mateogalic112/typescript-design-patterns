import { Auction } from "./Auction";
import { Bidder } from "./Bidder";

function main() {
  const auction = new Auction();

  const bob = new Bidder("Bob");
  const alice = new Bidder("Alice");
  const john = new Bidder("John");

  auction.subscribe(bob);
  auction.subscribe(alice);
  auction.subscribe(john);

  bob.placeBid(auction, 100);
  alice.placeBid(auction, 200);

  auction.unsubscribe(bob);
  bob.placeBid(auction, 300);
}

main();
