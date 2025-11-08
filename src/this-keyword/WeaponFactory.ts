import { warriorPointsPercentage } from "./utils";
import { AttachmentType, Weapon } from "./Weapon";

export enum WeaponType {
  SWORD,
  AXE,
  HELMET,
}

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
      "Sword",
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
      "Axe",
      200,
      10,
      [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND],
      warriorPointsPercentage
    );
  }
}

class Helmet extends Weapon {
  constructor() {
    super("Helmet", 100, 100, [AttachmentType.HEAD], warriorPointsPercentage);
  }
}
