import { Weapon } from "./Weapon";

export enum WarriorType {
  ROMAN = "roman",
  SPARTAN = "spartan",
  PERSIAN = "persian",
}

export class Warrior {
  constructor(
    private attack: number,
    private defense: number,
    private type: WarriorType,
    private weapons: Weapon[] = []
  ) {}

  private calculateStats() {
    return this.weapons.reduce(
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
