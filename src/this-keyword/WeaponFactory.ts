import { warriorPointsPercentage } from "./utils";
import { Warrior, WarriorType } from "./Warrior";
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
        return new Sword(warriorPointsPercentage);
      case WeaponType.AXE:
        return new Axe(warriorPointsPercentage);
      case WeaponType.HELMET:
        return new Helmet(warriorPointsPercentage);
      default:
        throw new Error("Unsupported weapon type");
    }
  }
}

class Sword extends Weapon {
  constructor(
    private readonly warriorPointsPercentage: Record<WarriorType, number>
  ) {
    super("Sword", 100, 10, [
      AttachmentType.LEFT_HAND,
      AttachmentType.RIGHT_HAND,
    ]);
  }

  increasePoints(warrior: Warrior) {
    const pointsPercentage =
      this.warriorPointsPercentage[warrior.getWarriorType()] / 100;

    return {
      attackPoints: this.attackPoints * pointsPercentage,
      defensePoints: this.defensePoints * pointsPercentage,
    };
  }
}

class Axe extends Weapon {
  constructor(
    private readonly warriorPointsPercentage: Record<WarriorType, number>
  ) {
    super("Axe", 200, 10, [
      AttachmentType.LEFT_HAND,
      AttachmentType.RIGHT_HAND,
    ]);
  }

  increasePoints(warrior: Warrior) {
    const pointsPercentage =
      this.warriorPointsPercentage[warrior.getWarriorType()] / 100;

    return {
      attackPoints: this.attackPoints * pointsPercentage,
      defensePoints: this.defensePoints * pointsPercentage,
    };
  }
}

class Helmet extends Weapon {
  constructor(
    private readonly warriorPointsPercentage: Record<WarriorType, number>
  ) {
    super("Helmet", 100, 100, [AttachmentType.HEAD]);
  }

  increasePoints(warrior: Warrior) {
    const pointsPercentage =
      this.warriorPointsPercentage[warrior.getWarriorType()] / 100;

    return {
      attackPoints: this.attackPoints * pointsPercentage,
      defensePoints: this.defensePoints * pointsPercentage,
    };
  }
}
