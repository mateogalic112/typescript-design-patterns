import { Arsenal, Weapon } from "./Weapon";

describe("Iterator functionality", () => {
  const arsenal = new Arsenal();

  const ak47 = new Weapon("AK-47");
  arsenal.add(ak47);
  const m4a1 = new Weapon("M4A1");
  arsenal.add(m4a1);

  arsenal.add(new Weapon("AWP"));
  arsenal.add(new Weapon("M249"));

  test("should loop through whole list collection", () => {
    const weapons = arsenal.createIterator();

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(weapons.hasNext()).toBeFalsy();
  });

  test("should fail if index is out of range", () => {
    const weapons = arsenal.createIterator();

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(() => weapons.next()).toThrowError("At End of Iterator");
  });

  test("should return current element without advancing", () => {
    const weapons = arsenal.createIterator();

    expect(weapons.current()).toBe(ak47);

    weapons.next();
    expect(weapons.current()).toBe(m4a1);
    expect(weapons.hasNext()).toBeTruthy();
  });

  test("should fail current() if at end of iterator", () => {
    const weapons = arsenal.createIterator();

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(() => weapons.current()).toThrowError("At End of Iterator");
  });

  test("should allow re-iteration after reset", () => {
    const weapons = arsenal.createIterator();

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(weapons.hasNext()).toBeFalsy();

    weapons.reset();

    expect(weapons.hasNext()).toBeTruthy();
    expect(weapons.next()).toBe(ak47);
  });
});
