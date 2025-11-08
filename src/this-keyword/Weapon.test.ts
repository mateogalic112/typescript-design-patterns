import { Warrior, WarriorType } from "./Warrior";
import { WeaponFactory, WeaponType } from "./WeaponFactory";

describe("Weapon functionality", () => {
  const sword = WeaponFactory.createWeapon(WeaponType.SWORD);

  test("Should increase warrior points based on warrior type", () => {
    const spartanWarrior = new Warrior(100, 100, WarriorType.SPARTAN);
    const romanWarrior = new Warrior(100, 100, WarriorType.ROMAN);
    const persianWarrior = new Warrior(100, 100, WarriorType.PERSIAN);

    expect(sword.increasePoints(spartanWarrior)).toMatchObject({
      attackPoints: 80,
      defensePoints: 8,
    });
    expect(sword.increasePoints(romanWarrior)).toMatchObject({
      attackPoints: 100,
      defensePoints: 10,
    });
    expect(sword.increasePoints(persianWarrior)).toMatchObject({
      attackPoints: 20,
      defensePoints: 2,
    });
  });
});
