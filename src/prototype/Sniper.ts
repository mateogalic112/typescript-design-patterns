import { Soldier } from "./Soldier";

interface ConstructorArgs {
  speed: number;
  strength: number;
  range: number;
}

export class Sniper extends Soldier {
  private readonly range: number;

  constructor({ speed, strength, range }: ConstructorArgs) {
    super({ name: "Sniper", speed, strength });
    this.range = range;
  }

  attack(distanceToTarget: number = 0) {
    if (distanceToTarget > this.range) {
      console.log("Out of range");
      return 0;
    }
    return super.attack();
  }
}
