import { Weapon } from "./Weapon";

interface IWarriorBase {
  name: string;
  strength: number;
  health: number;
  weapon: Weapon;
}

export abstract class Warrior {
  private name: string;
  protected strength: number;
  protected health: number;
  protected weapon: Weapon;

  constructor({ name, strength, health, weapon }: IWarriorBase) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.weapon = weapon;
  }

  receiveDamage(damage: number) {
    const healthRemaining = this.health - damage;
    this.health = Math.max(0, healthRemaining);
  }

  abstract attack(): number;

  getName() {
    return this.name;
  }

  getHealth() {
    return this.health;
  }
}
