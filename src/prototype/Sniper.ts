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

  clone(): this {
    return Object.assign(super.clone(), {
      range: this.range,
    });
  }
}
