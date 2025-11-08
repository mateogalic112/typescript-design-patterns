import { Warrior } from "./Warrior";

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
    return {
      attackPoints:
        this.attackPoints + this.getWarriorPoints(warrior).attackPoints,
      defensePoints:
        this.defensePoints + this.getWarriorPoints(warrior).defensePoints,
    };
  }

  abstract getWarriorPoints(warrior: Warrior): {
    attackPoints: number;
    defensePoints: number;
  };
}
