import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";

export class Archer extends Warrior {
  private arrowsCount: number;

  constructor(arrowsCount: number) {
    super({
      name: "Archer",
      strength: 100,
      health: 1000,
      weapon: new Weapon({ name: "Bow with Arrows", damage: 100 }),
    });

    this.arrowsCount = arrowsCount;
  }

  attack() {
    if (this.arrowsCount === 0) return 50;
    this.arrowsCount--;
    return this.strength + this.weapon.attack();
  }
}
