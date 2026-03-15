import { Iterator } from "./Iterator";
import { Weapon } from "./Weapon";

function main() {
  const arsenal = [
    new Weapon("AK-47"),
    new Weapon("M4A1"),
    new Weapon("AWP"),
    new Weapon("M249"),
  ];

  const weapons = new Iterator(arsenal);

  while (weapons.hasNext()) {
    weapons.next().fire();
  }
}

main();
