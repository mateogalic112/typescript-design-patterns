import { Soldier } from "./Soldier";

export class Sniper extends Soldier {
  constructor(
    protected stamina: number,
    protected speed: number,
    protected strength: number,
    protected range: number
  ) {
    super(stamina, speed, strength);
    this.range = range;
  }

  clone(): this {
    return Object.assign(super.clone(), { range: this.range });
  }
}
