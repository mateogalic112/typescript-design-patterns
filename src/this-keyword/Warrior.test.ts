import { Warrior, WarriorType } from "./Warrior";
import { AttachmentType, Weapon } from "./Weapon";

describe("Warrior functionality", () => {
  let spartanWarrior: Warrior;

  const sword = new Weapon(
    "sword",
    100,
    100,
    [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND],
    new Map([[WarriorType.SPARTAN, 100]])
  );
  const axe = new Weapon(
    "axe",
    200,
    50,
    [AttachmentType.RIGHT_HAND, AttachmentType.LEFT_HAND],
    new Map([[WarriorType.SPARTAN, 200]])
  );
  const helmet = new Weapon(
    "helmet",
    20,
    200,
    [AttachmentType.HEAD],
    new Map()
  );

  beforeEach(() => {
    spartanWarrior = new Warrior(WarriorType.SPARTAN, 100, 100);
  });

  describe("Attach weapon to warrior", () => {
    test("should fail when equiping weapon with same type", () => {
      try {
        spartanWarrior
          .attachWeapon(sword, AttachmentType.LEFT_HAND)
          .attachWeapon(axe, AttachmentType.LEFT_HAND);
      } catch (e) {
        expect((e as Error).message).toBe(
          `Weapon already attached to ${AttachmentType.LEFT_HAND}!`
        );
      }
    });

    test("Should add new weapon to warrior weapon inventory", () => {
      spartanWarrior
        .attachWeapon(sword, AttachmentType.LEFT_HAND)
        .attachWeapon(helmet, AttachmentType.HEAD);

      expect(spartanWarrior.getWeapons().size).toBe(2);
    });
  });

  describe("Get warrior info", () => {
    test("Should return base info before adding weapons", () => {
      expect(spartanWarrior.getWarriorPoints()).toMatchObject({
        attack: 100,
        defense: 100,
      });
      expect(spartanWarrior.getWeapons()).toEqual(new Map());
    });

    test("Should return new info after adding weapons", () => {
      spartanWarrior
        .attachWeapon(sword, AttachmentType.LEFT_HAND)
        .attachWeapon(helmet, AttachmentType.HEAD);

      expect(spartanWarrior.getWarriorPoints()).toMatchObject({
        attack: 100 + 200 + 20,
        defense: 100 + 200 + 200,
      });
      expect(spartanWarrior.getWeapons()).toEqual(
        new Map([
          [AttachmentType.LEFT_HAND, sword],
          [AttachmentType.HEAD, helmet],
        ])
      );
    });
  });
});
