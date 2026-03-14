import { Auction } from "./Auction";
import { Bidder } from "./Bidder";

describe("Auction functionality", () => {
  test("should start with no bids", () => {
    const auction = new Auction();
    expect(auction.getLatestBid()).toBe("No bids yet");
  });

  describe("Subscriptions", () => {
    test("should not subscribe the same observer twice", () => {
      const auction = new Auction();
      const observer = new Bidder("John");
      auction.subscribe(observer);
      auction.subscribe(observer);
      expect(auction.getObserversCount()).toBe(1);
    });
  });
});
