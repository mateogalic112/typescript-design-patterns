import { Weapon, AttachmentType } from "./Weapon";

export enum WarriorType {
  ROMAN,
  SPARTAN,
  PERSIAN,
}

export class Warrior {
  constructor(
    private attack: number,
    private defense: number,
    private weapons: Map<AttachmentType, Weapon> = new Map()
  ) {}

  getWarriorInfo() {
    return {
      ...this.calculateStats(),
      weapons: this.printWeapons(),
    };
  }

  getWeapons() {
    return this.weapons;
  }

  attachWeapon(newWeapon: Weapon, attachmentType: AttachmentType) {
    if (!this.canAttachWeapon(newWeapon, attachmentType)) {
      throw new Error(`Weapon already attached to ${attachmentType}!`);
    }
    this.weapons.set(attachmentType, newWeapon);
    return this;
  }

  private printWeapons() {
    return Array.from(this.weapons.values()).map((weapon) => weapon.toString());
  }

  private canAttachWeapon(newWeapon: Weapon, attachmentType: AttachmentType) {
    if (!newWeapon.getAttachmentTypes().includes(attachmentType)) {
      return false;
    }
    if (this.weapons.get(attachmentType) instanceof Weapon) {
      return false;
    }
    return true;
  }

  private calculateStats() {
    return Array.from(this.weapons.values()).reduce(
      (total, weapon) => {
        const { attackPoints, defensePoints } = weapon.increasePoints(this);
        return {
          attack: total.attack + attackPoints,
          defense: total.defense + defensePoints,
        };
      },
      {
        attack: this.attack,
        defense: this.defense,
      }
    );
  }
}
