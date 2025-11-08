import { WarriorType } from "./Warrior";
import { WarriorFactory } from "./WarriorFactory";
import { WeaponFactory, WeaponType } from "./WeaponFactory";

describe("Weapon functionality", () => {
  const sword = WeaponFactory.createWeapon(WeaponType.SWORD);

  test("Should increase warrior points based on warrior type", () => {
    const spartanWarrior = WarriorFactory.createWarrior(WarriorType.SPARTAN);
    const romanWarrior = WarriorFactory.createWarrior(WarriorType.ROMAN);
    const persianWarrior = WarriorFactory.createWarrior(WarriorType.PERSIAN);

    expect(sword.increasePoints(spartanWarrior)).toMatchObject({
      attackPoints: 180,
      defensePoints: 18,
    });
    expect(sword.increasePoints(romanWarrior)).toMatchObject({
      attackPoints: 200,
      defensePoints: 20,
    });
    expect(sword.increasePoints(persianWarrior)).toMatchObject({
      attackPoints: 120,
      defensePoints: 110,
    });
  });
});
