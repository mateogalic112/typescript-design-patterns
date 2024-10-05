export class Weapon {
  constructor(private name: string, private damage: number) {}

  getInfo() {
    return `${this.name} with damage ${this.damage}`;
  }

  attack() {
    return this.damage;
  }
}
