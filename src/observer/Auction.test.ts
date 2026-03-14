import { Auction } from "./Auction";

describe("Auction functionality", () => {
  test("should start with no bids", () => {
    const auction = new Auction();
    expect(auction.getLatestBid()).toBe("No bids yet");
  });
});
