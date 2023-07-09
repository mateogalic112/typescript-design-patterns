import { Warrior } from "./Warrior";
import { WarriorType } from "./types";
import { ancientSword, barbarHelmet } from "./utils";

function main() {
  const roman = new Warrior(100, 100, WarriorType.ROMAN);
  const spartan = new Warrior(100, 100, WarriorType.SPARTAN);
  const persian = new Warrior(100, 100, WarriorType.PERSIAN);

  roman.attachWeapon(ancientSword).attachWeapon(barbarHelmet);
  spartan.attachWeapon(ancientSword);
  persian.attachWeapon(ancientSword);

  console.log({ roman: roman.getWarriorInfo() });
  console.log({ spartan: spartan.getWarriorInfo() });
  console.log({ persian: persian.getWarriorInfo() });

  // { roman: { attack: 300, defense: 210, type: 'roman' } }
  // { spartan: { attack: 180, defense: 108, type: 'spartan' } }
  // { persian: { attack: 120, defense: 102, type: 'persian' } }
}

main();
