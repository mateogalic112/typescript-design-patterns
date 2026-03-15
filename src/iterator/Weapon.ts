import { Iterator } from "./Iterator";
import { Aggregate } from "./types";

export class Weapon {
  constructor(private weaponName: string) {}

  fire() {
    console.log(`${this.weaponName} is firing`);
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
