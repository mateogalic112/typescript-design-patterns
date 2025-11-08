import { WarriorType } from "./Warrior";
import { WarriorFactory } from "./WarriorFactory";
import { AttachmentType } from "./Weapon";
import { WeaponType } from "./WeaponFactory";
import { WeaponFactory } from "./WeaponFactory";

function main() {
  const roman = WarriorFactory.createWarrior(WarriorType.ROMAN);
  const spartan = WarriorFactory.createWarrior(WarriorType.SPARTAN);
  const persian = WarriorFactory.createWarrior(WarriorType.PERSIAN);

  const sword = WeaponFactory.createWeapon(WeaponType.SWORD);
  const axe = WeaponFactory.createWeapon(WeaponType.AXE);
  const helmet = WeaponFactory.createWeapon(WeaponType.HELMET);

  roman
    .attachWeapon(sword, AttachmentType.LEFT_HAND)
    .attachWeapon(axe, AttachmentType.RIGHT_HAND)
    .attachWeapon(helmet, AttachmentType.HEAD);

  spartan.attachWeapon(sword, AttachmentType.LEFT_HAND);

  persian.attachWeapon(sword, AttachmentType.LEFT_HAND);

  console.log({ roman: roman.getWarriorInfo() });
  console.log({ spartan: spartan.getWarriorInfo() });
  console.log({ persian: persian.getWarriorInfo() });
}

main();
