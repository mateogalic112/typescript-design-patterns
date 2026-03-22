import { Prototype } from "./Prototype";

type InitOperation = () => void;

interface SoldierConstructorArgs {
  name: string;
  speed: number;
  strength: number;
  init?: InitOperation;
}

function heavyInit() {
  console.log("Executing heavy operation...");
  for (let i = 0; i < 100_000_000; i++) {
    let x = Math.random() * 100;
    x += 1;
  }
}

export class Soldier implements Prototype<Soldier> {
  private readonly name: string;
  private readonly speed: number;
  private readonly strength: number;

  constructor({ name, speed, strength, init = heavyInit }: SoldierConstructorArgs) {
    this.name = name;
    this.speed = speed;
    this.strength = strength;
    init();
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

  toString() {
    return this.name;
  }
}
