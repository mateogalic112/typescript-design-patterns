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

  getWarriorPoints(warrior: Warrior) {
    switch (true) {
      case warrior instanceof Roman:
        return { attackPoints: 100, defensePoints: 10 };
      case warrior instanceof Spartan:
        return { attackPoints: 80, defensePoints: 8 };
      case warrior instanceof Persian:
        return { attackPoints: 20, defensePoints: 100 };
      default:
        throw new Error("Unsupported warrior type");
    }
  }
}

class Axe extends Weapon {
  constructor() {
    super(200, 10, [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND]);
  }

  getWarriorPoints(warrior: Warrior) {
    switch (true) {
      case warrior instanceof Roman:
        return { attackPoints: 200, defensePoints: 20 };
      case warrior instanceof Spartan:
        return { attackPoints: 100, defensePoints: 10 };
      case warrior instanceof Persian:
        return { attackPoints: 50, defensePoints: 5 };
      default:
        throw new Error("Unsupported warrior type");
    }
  }
}

class Helmet extends Weapon {
  constructor() {
    super(10, 100, [AttachmentType.HEAD]);
  }

  getWarriorPoints(warrior: Warrior) {
    switch (true) {
      case warrior instanceof Roman:
        return { attackPoints: 0, defensePoints: 100 };
      case warrior instanceof Spartan:
        return { attackPoints: 50, defensePoints: 50 };
      case warrior instanceof Persian:
        return { attackPoints: 20, defensePoints: 2 };
      default:
        throw new Error("Unsupported warrior type");
    }
  }
}
