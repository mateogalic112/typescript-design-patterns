export class Weapon {
  constructor(private weaponName: string) {}

  fire() {
    console.log(`${this.weaponName} is firing`);
  }
}
