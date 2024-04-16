interface ISoldier {
  move(): number;
  attack(): number;
  clone(): this;
}

export class Soldier implements ISoldier {
  constructor(
    protected stamina: number,
    protected speed: number,
    protected strength: number
  ) {
    // Heavy operation like reading from a file, network, etc.
    this.heavyOperation();
  }

  clone(): this {
    // Shallow copy
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  move(): number {
    if (this.stamina === 0) return 0;
    console.log("Moving " + this.stamina);
    return this.stamina--;
  }

  attack() {
    console.log("Attacking " + this.strength * this.speed);
    return this.strength * this.speed;
  }

  heavyOperation() {
    console.log("Executing heavy operation...");
    for (let i = 0; i < 100_000_000; i++) {
      const x = Math.random() * 100;
    }
  }
}
