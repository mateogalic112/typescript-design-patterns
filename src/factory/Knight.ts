import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";

export class Knight extends Warrior {
  private stamina: number;

  constructor(stamina: number) {
    super({
      name: "Knight",
      strength: 100,
      health: 1000,
      weapon: new Weapon("Sword", 100),
    });

    this.stamina = stamina;
  }

  attack() {
    if (this.stamina === 0) return 50;

    this.stamina--;
    return this.strength + this.weapon.attack();
  }
}
