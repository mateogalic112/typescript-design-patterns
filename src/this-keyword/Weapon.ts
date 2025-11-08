import { Warrior, WarriorType } from "./Warrior";

export enum AttachmentType {
  LEFT_HAND,
  RIGHT_HAND,
  BODY,
  HEAD,
}

export abstract class Weapon {
  constructor(
    protected readonly attackPoints: number,
    protected readonly defensePoints: number,
    protected readonly attachmentTypes: Array<AttachmentType>,
    protected readonly warriorPointsPercentage: Record<WarriorType, number>
  ) {}

  getAttachmentTypes() {
    return this.attachmentTypes;
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
