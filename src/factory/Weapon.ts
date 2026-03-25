export class Weapon {
  constructor(
    private name: string,
    private damage: number
  ) {}

  attack() {
    return this.damage;
  }

  toString() {
    return `${this.name} with damage ${this.damage}`;
  }
}
