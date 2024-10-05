import { Soldier } from "./Soldier";

export class Sniper extends Soldier {
  constructor(
    protected speed: number,
    protected strength: number,
    protected range: number
  ) {
    super(speed, strength);
    this.range = range;
  }

  clone(): this {
    return Object.assign(super.clone(), { range: this.range });
  }
}
