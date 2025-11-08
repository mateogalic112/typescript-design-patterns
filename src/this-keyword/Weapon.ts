import { Warrior, WarriorType } from "./Warrior";

export enum AttachmentType {
  LEFT_HAND,
  RIGHT_HAND,
  BODY,
  HEAD,
}

export class Weapon {
  constructor(
    private readonly name: string,
    private readonly attackPoints: number,
    private readonly defensePoints: number,
    private readonly type: AttachmentType,
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
