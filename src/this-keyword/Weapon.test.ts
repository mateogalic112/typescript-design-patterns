import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";
import { WarriorType, WeaponType } from "./types";

describe("Weapon functionality", () => {
  let sword: Weapon;

  beforeEach(() => {
    sword = new Weapon(
      "Sword",
      100,
      100,
      WeaponType.LEFT_HAND,
      warriorPointsPercentage
    );
  });

  test("Should increase warrior points based on warrior type", () => {
    const spartanWarrior = new Warrior(100, 100, WarriorType.SPARTAN);
    const romanWarrior = new Warrior(100, 100, WarriorType.ROMAN);
    const persianWarrior = new Warrior(100, 100, WarriorType.PERSIAN);

    expect(sword.increasePoints(spartanWarrior)).toMatchObject({
      attackPoints: 80,
      defensePoints: 80,
    });
    expect(sword.increasePoints(romanWarrior)).toMatchObject({
      attackPoints: 100,
      defensePoints: 100,
    });
    expect(sword.increasePoints(persianWarrior)).toMatchObject({
      attackPoints: 20,
      defensePoints: 20,
    });
  });
});

const warriorPointsPercentage = {
  [WarriorType.ROMAN]: 100,
  [WarriorType.SPARTAN]: 80,
  [WarriorType.PERSIAN]: 20,
};
