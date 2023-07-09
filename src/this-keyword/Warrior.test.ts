import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";
import { WarriorType, WeaponType } from "./types";

describe("Warrior functionality", () => {
  let spartanWarrior: Warrior;

  beforeEach(() => {
    spartanWarrior = new Warrior(100, 100, WarriorType.SPARTAN);
  });

  describe("Attach weapon to warrior", () => {
    test("Should fail when equiping weapon with same type", () => {
      try {
        spartanWarrior
          .attachWeapon(weaponInventory.sword)
          .attachWeapon(weaponInventory.axe);
      } catch (e) {
        expect((e as Error).message).toBe(
          `Weapon type ${weaponInventory.axe.getType()} already attached!`
        );
      }
    });

    test("Should add new weapon to warrior weapon inventory", () => {
      spartanWarrior
        .attachWeapon(weaponInventory.sword)
        .attachWeapon(weaponInventory.helmet);

      expect(spartanWarrior.getWarriorInfo().weapons.length).toBe(2);
    });
  });

  describe("Get warrior info", () => {
    test("Should return base info before adding weapons", () => {
      expect(spartanWarrior.getWarriorInfo()).toMatchObject({
        attack: 100,
        defense: 100,
        type: WarriorType.SPARTAN,
        weapons: [],
      });
    });

    test("Should return new info after adding weapons", () => {
      spartanWarrior
        .attachWeapon(weaponInventory.sword)
        .attachWeapon(weaponInventory.helmet);

      expect(spartanWarrior.getWarriorInfo()).toMatchObject({
        attack: 100 + 80 + 80,
        defense: 100 + 8 + 80,
        type: WarriorType.SPARTAN,
        weapons: [weaponInventory.sword, weaponInventory.helmet],
      });
    });
  });
});

const warriorPointsPercentage = {
  [WarriorType.ROMAN]: 100,
  [WarriorType.SPARTAN]: 80,
  [WarriorType.PERSIAN]: 20,
};

const weaponInventory: Record<string, Weapon> = {
  sword: new Weapon(
    "Sword",
    100,
    10,
    WeaponType.LEFT_HAND,
    warriorPointsPercentage
  ),
  axe: new Weapon(
    "Axe",
    200,
    10,
    WeaponType.LEFT_HAND,
    warriorPointsPercentage
  ),
  helmet: new Weapon(
    "Helmet",
    100,
    100,
    WeaponType.HEAD,
    warriorPointsPercentage
  ),
};
