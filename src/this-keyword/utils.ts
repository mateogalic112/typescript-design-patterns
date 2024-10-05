import { WarriorType } from "./Warrior";
import { Weapon, WeaponType } from "./Weapon";

export const warriorPointsPercentage = {
  [WarriorType.ROMAN]: 100,
  [WarriorType.SPARTAN]: 80,
  [WarriorType.PERSIAN]: 20,
};

export const weaponInventory: Record<string, Weapon> = {
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
