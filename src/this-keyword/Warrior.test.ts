import { Warrior, WarriorType } from "./Warrior";
import { WarriorFactory } from "./WarriorFactory";
import { AttachmentType } from "./Weapon";
import { WeaponFactory, WeaponType } from "./WeaponFactory";

describe("Warrior functionality", () => {
  let spartanWarrior: Warrior;
  const sword = WeaponFactory.createWeapon(WeaponType.SWORD);
  const axe = WeaponFactory.createWeapon(WeaponType.AXE);
  const helmet = WeaponFactory.createWeapon(WeaponType.HELMET);

  beforeEach(() => {
    spartanWarrior = WarriorFactory.createWarrior(WarriorType.SPARTAN);
  });

  describe("Attach weapon to warrior", () => {
    test("Should fail when equiping weapon with same type", () => {
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
      expect(spartanWarrior.getWarriorInfo()).toMatchObject({
        attack: 100,
        defense: 100,
        weapons: new Map(),
      });
    });

    test("Should return new info after adding weapons", () => {
      spartanWarrior
        .attachWeapon(sword, AttachmentType.LEFT_HAND)
        .attachWeapon(helmet, AttachmentType.HEAD);

      expect(spartanWarrior.getWarriorInfo()).toMatchObject({
        attack: 100 + 180 + 60,
        defense: 100 + 18 + 150,
        weapons: new Map([
          [AttachmentType.LEFT_HAND, sword],
          [AttachmentType.HEAD, helmet],
        ]),
      });
    });
  });
});
