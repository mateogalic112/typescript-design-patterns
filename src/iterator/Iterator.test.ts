import { Iterator } from "./Iterator";
import { Weapon } from "./Weapon";

describe("Iterator functionality", () => {
  const arsenal: Weapon[] = [
    new Weapon("AK-47"),
    new Weapon("M4A1"),
    new Weapon("AWP"),
  ];

  test("Should loop through whole list collection", () => {
    const weapons = new Iterator<Weapon>(arsenal);

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(weapons.index).toBe(arsenal.length);
    expect(weapons.hasNext()).toBeFalsy();
  });

  test("Should fail if index is out of range", () => {
    const weapons = new Iterator<Weapon>(arsenal);

    while (weapons.hasNext()) {
      weapons.next();
    }

    expect(() => weapons.next()).toThrowError("At End of Iterator");
  });
});
