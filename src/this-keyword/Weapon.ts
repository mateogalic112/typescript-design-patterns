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
    protected readonly attackPoints: number,
    protected readonly defensePoints: number,
    protected readonly attachmentTypes: Array<AttachmentType>,
    protected readonly warriorBonus: Map<WarriorType, number>
  ) {}

  getAttachmentTypes() {
    return this.attachmentTypes;
  }

  increasePoints(warrior: Warrior) {
    const bonusPoints = this.warriorBonus.get(warrior.getWarriorType()) ?? 0;
    return {
      attackPoints: this.attackPoints + bonusPoints,
      defensePoints: this.defensePoints + bonusPoints,
    };
  }

  toString() {
    return `${this.name} has damage ${this.attackPoints} and defense ${this.defensePoints}`;
  }
}
