import { Iterator } from "./Iterator";
import { Aggregate } from "./types";

export class Weapon {
  constructor(private name: string) {}

  fire() {
    console.log(`${this} is firing`);
  }

  toString() {
    return this.name;
  }
}

export class Arsenal implements Aggregate<Weapon> {
  private weapons: Weapon[] = [];

  add(weapon: Weapon) {
    this.weapons.push(weapon);
  }

  createIterator() {
    return new Iterator(this.weapons);
  }
}
