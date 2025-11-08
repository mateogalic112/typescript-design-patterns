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
    protected readonly attachmentTypes: Array<AttachmentType>
  ) {}

  getAttachmentTypes() {
    return this.attachmentTypes;
  }

  increasePoints(warrior: Warrior) {
    const pointsPercentage = this.getWarriorPointsPercentage(warrior) / 100;

    return {
      attackPoints: this.attackPoints * pointsPercentage,
      defensePoints: this.defensePoints * pointsPercentage,
    };
  }

  abstract getWarriorPointsPercentage(warrior: Warrior): number;
}
