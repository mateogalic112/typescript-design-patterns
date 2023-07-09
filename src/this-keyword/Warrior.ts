import { Weapon } from "./Weapon";
import { WarriorType } from "./types";

export class Warrior {
  constructor(
    private attack: number,
    private defense: number,
    private type: WarriorType,
    private weapons: Weapon[] = []
  ) {}

  private calculateStats() {
    const stats = this.weapons.reduce(
      (total, weapon) => {
        const { attackPoints, defensePoints } = weapon.increasePoints(this);
        return {
          ...total,
          attack: total.attack + attackPoints,
          defense: total.defense + defensePoints,
        };
      },
      {
        attack: this.attack,
        defense: this.defense,
      }
    );

    return stats;
  }

  attachWeapon(newWeapon: Weapon) {
    const hasWeaponTypeAttached = this.weapons.find(
      (weapon) => weapon.getType() === newWeapon.getType()
    );
    if (hasWeaponTypeAttached) {
      throw new Error(`Weapon type ${newWeapon.getType()} already attached!`);
    }

    this.weapons.push(newWeapon);
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
}
