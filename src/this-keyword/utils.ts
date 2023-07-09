import { Weapon } from "./Weapon";
import { WarriorType, WeaponType } from "./types";

export const ancientSword = new Weapon(
  "Ancient Sword",
  100,
  10,
  WeaponType.LEFT_HAND,
  {
    [WarriorType.ROMAN]: 100,
    [WarriorType.SPARTAN]: 80,
    [WarriorType.PERSIAN]: 20,
  }
);

export const barbarHelmet = new Weapon(
  "Barbar Helmet",
  100,
  100,
  WeaponType.HEAD,
  {
    [WarriorType.ROMAN]: 100,
    [WarriorType.SPARTAN]: 80,
    [WarriorType.PERSIAN]: 20,
  }
);
