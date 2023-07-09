import { Warrior } from "./Warrior";
import { WarriorType, WeaponType } from "./types";

export class Weapon {
  constructor(
    private readonly name: string,
    private readonly attackPoints: number,
    private readonly defensePoints: number,
    private readonly type: WeaponType,
    private readonly warriorPointsPercentage: Record<WarriorType, number>
  ) {}

  getName() {
    return this.name;
  }

  increasePoints(warrior: Warrior): {
    attackPoints: number;
    defensePoints: number;
  } {
    const pointsPercentage =
      this.warriorPointsPercentage[warrior.getWarriorType()] / 100;

    return {
      attackPoints: this.attackPoints * pointsPercentage,
      defensePoints: this.defensePoints * pointsPercentage,
    };
  }

  getType() {
    return this.type;
  }
}
