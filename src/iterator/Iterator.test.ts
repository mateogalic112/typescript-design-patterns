import { Arsenal, Weapon } from "./Weapon";

describe("Iterator functionality", () => {
  const arsenal = new Arsenal();

  const ak47 = new Weapon("AK-47");
  arsenal.add(ak47);

  arsenal.add(new Weapon("M4A1"));
  arsenal.add(new Weapon("AWP"));
  arsenal.add(new Weapon("M249"));

  test("Should loop through whole list collection", () => {
    const weapons = arsenal.createIterator();

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(weapons.hasNext()).toBeFalsy();
  });

  test("Should fail if index is out of range", () => {
    const weapons = arsenal.createIterator();

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(() => weapons.next()).toThrowError("At End of Iterator");
  });

  test("Should allow re-iteration after reset", () => {
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
