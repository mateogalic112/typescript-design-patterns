import { Warrior, WarriorType } from "./Warrior";

export enum AttachmentType {
  LEFT_HAND,
  RIGHT_HAND,
  BODY,
  HEAD,
}

export class Weapon {
  constructor(
    protected readonly name: string,
    protected readonly attackPoints: number,
    protected readonly defensePoints: number,
    protected readonly attachmentTypes: Array<AttachmentType>,
    protected readonly warriorPointsPercentage: Record<WarriorType, number>
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

  getAttachmentTypes() {
    return this.attachmentTypes;
  }
}
