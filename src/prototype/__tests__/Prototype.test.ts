import { Soldier } from "../Soldier";
import { Sniper } from "../Sniper";
import { createSniper } from "../test-utils";

describe("Prototype pattern", () => {
  test("clone should not call init", () => {
    const init = jest.fn();
    const base = new Sniper({ speed: 5, strength: 10, range: 250, init });
    base.clone();
    base.clone();
    base.clone();

    expect(init).toHaveBeenCalledTimes(1); // only from constructor
  });

  test("clone should preserve the prototype chain", () => {
    const clone = createSniper().clone();

    expect(clone).toBeInstanceOf(Sniper);
    expect(clone).toBeInstanceOf(Soldier);
  });

  test("clone should be independent from the original", () => {
    const base = createSniper();
    const clone = base.clone();

    expect(clone).not.toBe(base);
    expect(clone.attack()).toBe(base.attack());
  });

  test("clone should copy all properties", () => {
    const clone = createSniper().clone();

    expect(clone.toString()).toBe("Sniper");
    expect(clone.attack()).toBe(50);
  });
});
