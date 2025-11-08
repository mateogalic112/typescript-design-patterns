import { AttachmentType, Weapon } from "./Weapon";
import { WarriorType } from "./Warrior";

export enum WeaponType {
  SWORD,
  AXE,
  HELMET,
}

export const warriorPointsPercentage: Record<WarriorType, number> = {
  [WarriorType.ROMAN]: 100,
  [WarriorType.SPARTAN]: 80,
  [WarriorType.PERSIAN]: 20,
};

export class WeaponFactory {
  static createWeapon(weaponType: WeaponType): Weapon {
    switch (weaponType) {
      case WeaponType.SWORD:
        return new Sword();
      case WeaponType.AXE:
        return new Axe();
      case WeaponType.HELMET:
        return new Helmet();
      default:
        throw new Error("Unsupported weapon type");
    }
  }
}

class Sword extends Weapon {
  constructor() {
    super(
      100,
      10,
      [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND],
      warriorPointsPercentage
    );
  }
}

class Axe extends Weapon {
  constructor() {
    super(
      200,
      10,
      [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND],
      warriorPointsPercentage
    );
  }
}

class Helmet extends Weapon {
  constructor() {
    super(100, 100, [AttachmentType.HEAD], warriorPointsPercentage);
  }
}
