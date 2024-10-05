import { Warrior, WarriorType } from "./Warrior";
import { weaponInventory } from "./utils";

function main() {
  const roman = new Warrior(100, 100, WarriorType.ROMAN);
  const spartan = new Warrior(100, 100, WarriorType.SPARTAN);
  const persian = new Warrior(100, 100, WarriorType.PERSIAN);

  roman
    .attachWeapon(weaponInventory.sword)
    .attachWeapon(weaponInventory.helmet);
  spartan.attachWeapon(weaponInventory.sword);
  persian.attachWeapon(weaponInventory.sword);

  console.log({ roman: roman.getWarriorInfo() });
  console.log({ spartan: spartan.getWarriorInfo() });
  console.log({ persian: persian.getWarriorInfo() });
}

main();
