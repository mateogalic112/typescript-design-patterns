import { Sniper } from "../Sniper";

describe("Sniper", () => {
  let sniper: Sniper;

  beforeEach(() => {
    sniper = new Sniper({
      speed: 5,
      strength: 10,
      range: 250,
      init: () => {},
    });
  });

  test("should return 0 when target is out of range", () => {
    expect(sniper.attack(300)).toBe(0);
  });

  test("should attack when target is in range", () => {
    expect(sniper.attack(100)).toBe(50);
  });
});
