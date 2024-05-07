import { Iterator } from "./Iterator";
import { Weapon } from "./Weapon";

function main() {
  const weaponArsenal = [
    new Weapon("AK-47"),
    new Weapon("M4A1"),
    new Weapon("AWP"),
  ];

  const weapons = new Iterator<Weapon>(weaponArsenal);

  while (weapons.hasNext()) {
    weapons.next().fire();
  }
}

main();
