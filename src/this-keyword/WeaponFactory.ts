import { AttachmentType, Weapon } from "./Weapon";
import { Warrior } from "./Warrior";
import { Persian, Roman, Spartan } from "./WarriorFactory";

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
    super(100, 10, [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND]);
  }

  getWarriorPointsPercentage = (warrior: Warrior) => {
    switch (true) {
      case warrior instanceof Roman:
        return 100;
      case warrior instanceof Spartan:
        return 80;
      case warrior instanceof Persian:
        return 20;
      default:
        throw new Error("Unsupported warrior type");
    }
  };
}

class Axe extends Weapon {
  constructor() {
    super(200, 10, [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND]);
  }

  getWarriorPointsPercentage = (warrior: Warrior) => {
    switch (true) {
      case warrior instanceof Roman:
        return 100;
      case warrior instanceof Spartan:
        return 80;
      case warrior instanceof Persian:
        return 20;
      default:
        throw new Error("Unsupported warrior type");
    }
  };
}

class Helmet extends Weapon {
  constructor() {
    super(100, 100, [AttachmentType.HEAD]);
  }

  getWarriorPointsPercentage = (warrior: Warrior) => {
    switch (true) {
      case warrior instanceof Roman:
        return 100;
      case warrior instanceof Spartan:
        return 80;
      case warrior instanceof Persian:
        return 20;
      default:
        throw new Error("Unsupported warrior type");
    }
  };
}
