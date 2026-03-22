import { Prototype } from "./Prototype";

interface SoldierConstructorArgs {
  name: string;
  speed: number;
  strength: number;
}

export class Soldier implements Prototype<Soldier> {
  private readonly name: string;
  private readonly speed: number;
  private readonly strength: number;

  constructor({ name, speed, strength }: SoldierConstructorArgs) {
    this.name = name;
    this.speed = speed;
    this.strength = strength;
    // Heavy operation like reading from a file, network, etc.
    this.heavyOperation();
  }

  clone(): this {
    // Shallow copy
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  attack() {
    const power = this.strength * this.speed;
    console.log("Attacking " + power);
    return power;
  }

  heavyOperation() {
    console.log("Executing heavy operation...");
    for (let i = 0; i < 100_000_000; i++) {
      let x = Math.random() * 100;
      x += 1;
    }
  }

  toString() {
    return this.name;
  }
}
