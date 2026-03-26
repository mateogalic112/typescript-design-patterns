import { WarriorType } from "./Warrior";
import { AttachmentType, Weapon } from "./Weapon";
import { Warrior } from "./Warrior";

describe("Weapon functionality", () => {
  const sword = new Weapon(
    "sword",
    100,
    100,
    [AttachmentType.RIGHT_HAND, AttachmentType.LEFT_HAND],
    new Map([[WarriorType.SPARTAN, 50]])
  );

  test("should increase warrior points based on warrior type", () => {
    const spartanWarrior = new Warrior(WarriorType.SPARTAN, 100, 100);
    const romanWarrior = new Warrior(WarriorType.ROMAN, 100, 100);
    const persianWarrior = new Warrior(WarriorType.PERSIAN, 80, 120);

    expect(sword.increasePoints(spartanWarrior)).toMatchObject({
      attackPoints: 150,
      defensePoints: 150,
    });
    expect(sword.increasePoints(romanWarrior)).toMatchObject({
      attackPoints: 100,
      defensePoints: 100,
    });
    expect(sword.increasePoints(persianWarrior)).toMatchObject({
      attackPoints: 100,
      defensePoints: 100,
    });
  });
});
