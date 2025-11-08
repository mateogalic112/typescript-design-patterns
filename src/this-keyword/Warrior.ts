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
    private type: WarriorType,
    private weapons: Map<AttachmentType, Weapon> = new Map()
  ) {}

  attachWeapon(newWeapon: Weapon) {
    const hasWeaponTypeAttached = this.weapons.has(newWeapon.getType());
    if (hasWeaponTypeAttached) {
      throw new Error(`Weapon type ${newWeapon.getType()} already attached!`);
    }
    this.weapons.set(newWeapon.getType(), newWeapon);
    return this;
  }

  getWarriorType() {
    return this.type;
  }

  getWarriorInfo() {
    return {
      ...this.calculateStats(),
      type: this.type,
      weapons: this.weapons,
    };
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
