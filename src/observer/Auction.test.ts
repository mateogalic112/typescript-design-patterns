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

    test("should subscribe and unsubscribe observers", () => {
      const auction = new Auction();
      const observer = new Bidder("John");
      const observer2 = new Bidder("Jane");

      auction.subscribe(observer);
      auction.subscribe(observer2);
      expect(auction.getObserversCount()).toBe(2);

      auction.unsubscribe(observer);
      expect(auction.getObserversCount()).toBe(1);
    });
  });

  describe("Bidding", () => {
    test("should not place bid if amount is less than latest bid", () => {
      const auction = new Auction();
      const observer = new Bidder("John");
      const observer2 = new Bidder("Jane");

      auction.subscribe(observer);
      auction.subscribe(observer2);
      auction.placeBid({ bidder: "John", amount: 100 });
      auction.placeBid({ bidder: "Jane", amount: 50 });

      expect(auction.getLatestBid()).toBe("John - 100$");
      expect(observer.getMessages()).toEqual([
        "John: Latest bid -> John - 100$",
      ]);
      expect(observer2.getMessages()).toEqual([
        "Jane: Latest bid -> John - 100$",
      ]);
    });
  });

  describe("Running the auction", () => {
    test("should run the auction and notify observers when new highest bid is placed", () => {
      const auction = new Auction();
      const john = new Bidder("John");
      const jane = new Bidder("Jane");
      const jim = new Bidder("Jim");

      auction.subscribe(john);
      auction.subscribe(jane);
      auction.subscribe(jim);

      john.placeBid(auction, 100);
      jane.placeBid(auction, 80);

      expect(auction.getLatestBid()).toBe("John - 100$");

      jane.placeBid(auction, 200);
      jim.placeBid(auction, 300);
      john.placeBid(auction, 300);

      expect(auction.getLatestBid()).toBe("Jim - 300$");
      expect(john.getMessages().at(-1)).toContain("Jim - 300$");
      expect(jane.getMessages().at(-1)).toContain("Jim - 300$");
      expect(jim.getMessages().at(-1)).toContain("Jim - 300$");

      // Unsubscribe Jane and place a new highest bid
      auction.unsubscribe(jane);
      john.placeBid(auction, 400);
      // Jane should not receive a message because she is unsubscribed
      expect(jane.getMessages().at(-1)).toContain("Jim - 300$");

      expect(auction.getLatestBid()).toBe("John - 400$");
      expect(john.getMessages().at(-1)).toContain("John - 400$");
      expect(jim.getMessages().at(-1)).toContain("John - 400$");
    });
  });
});
