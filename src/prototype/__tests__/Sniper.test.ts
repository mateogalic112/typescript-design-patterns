import { createSniper } from "../test-utils";

describe("Sniper", () => {
  test("should return 0 when target is out of range", () => {
    expect(createSniper().attack(300)).toBe(0);
  });

  test("should attack when target is in range", () => {
    expect(createSniper().attack(100)).toBe(50);
  });
});
