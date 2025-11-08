import { Warrior, WarriorType } from "./Warrior";

export enum AttachmentType {
  LEFT_HAND,
  RIGHT_HAND,
  BODY,
  HEAD,
}

export abstract class Weapon {
  constructor(
    protected readonly name: string,
    protected readonly attackPoints: number,
    protected readonly defensePoints: number,
    protected readonly attachmentTypes: Array<AttachmentType>
  ) {}

  getName() {
    return this.name;
  }

  getAttachmentTypes() {
    return this.attachmentTypes;
  }

  abstract increasePoints(warrior: Warrior): {
    attackPoints: number;
    defensePoints: number;
  };
}
