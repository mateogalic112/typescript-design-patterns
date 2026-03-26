import { Warrior, WarriorType } from "./Warrior";
import { AttachmentType, Weapon } from "./Weapon";

function main() {
  const sword = new Weapon(
    "sword",
    100,
    100,
    [AttachmentType.LEFT_HAND, AttachmentType.RIGHT_HAND],
    new Map([[WarriorType.SPARTAN, 100]])
  );
  const axe = new Weapon(
    "axe",
    200,
    50,
    [AttachmentType.RIGHT_HAND, AttachmentType.LEFT_HAND],
    new Map([[WarriorType.SPARTAN, 200]])
  );
  const helmet = new Weapon(
    "helmet",
    20,
    200,
    [AttachmentType.HEAD],
    new Map()
  );

  const spartan = new Warrior(WarriorType.SPARTAN, 100, 100);
  const roman = new Warrior(WarriorType.ROMAN, 100, 100);
  const persian = new Warrior(WarriorType.PERSIAN, 100, 100);

  roman
    .attachWeapon(sword, AttachmentType.LEFT_HAND)
    .attachWeapon(axe, AttachmentType.RIGHT_HAND)
    .attachWeapon(helmet, AttachmentType.HEAD);

  spartan.attachWeapon(sword, AttachmentType.LEFT_HAND);

  persian.attachWeapon(sword, AttachmentType.LEFT_HAND);

  console.log({ roman: roman.getWarriorPoints() });
  console.log({ spartan: spartan.getWarriorPoints() });
  console.log({ persian: persian.getWarriorPoints() });
}

main();
