export class Soldier {
  constructor(protected speed: number, protected strength: number) {
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
}
