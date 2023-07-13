interface IWeaponBase {
  name: string;
  damage: number;
}

export class Weapon {
  private name: string;
  private damage: number;

  constructor({ name, damage }: IWeaponBase) {
    this.name = name;
    this.damage = damage;
  }

  getInfo() {
    return `${this.name} with damage ${this.damage}`;
  }

  attack() {
    return this.damage;
  }
}
