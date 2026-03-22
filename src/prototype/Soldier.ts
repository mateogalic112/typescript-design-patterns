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
    // Deep copy while preserving the prototype chain
    const cloned = structuredClone(this);
    Object.setPrototypeOf(cloned, Object.getPrototypeOf(this));
    return cloned;
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
