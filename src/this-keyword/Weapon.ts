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
    const {
      attackPoints: warriorAttackPoints,
      defensePoints: warriorDefensePoints,
    } = this.getWarriorPoints(warrior);

    return {
      attackPoints: this.attackPoints + warriorAttackPoints,
      defensePoints: this.defensePoints + warriorDefensePoints,
    };
  }

  abstract getWarriorPoints(warrior: Warrior): {
    attackPoints: number;
    defensePoints: number;
  };
}
