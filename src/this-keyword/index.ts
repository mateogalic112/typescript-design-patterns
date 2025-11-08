import { Warrior, WarriorType } from "./Warrior";
import { AttachmentType } from "./Weapon";
import { WeaponType } from "./WeaponFactory";
import { WeaponFactory } from "./WeaponFactory";

function main() {
  const roman = new Warrior(100, 100, WarriorType.ROMAN);
  const spartan = new Warrior(100, 100, WarriorType.SPARTAN);
  const persian = new Warrior(100, 100, WarriorType.PERSIAN);

  roman
    .attachWeapon(
      WeaponFactory.createWeapon(WeaponType.SWORD),
      AttachmentType.LEFT_HAND
    )
    .attachWeapon(
      WeaponFactory.createWeapon(WeaponType.HELMET),
      AttachmentType.HEAD
    );
  spartan.attachWeapon(
    WeaponFactory.createWeapon(WeaponType.SWORD),
    AttachmentType.LEFT_HAND
  );
  persian.attachWeapon(
    WeaponFactory.createWeapon(WeaponType.SWORD),
    AttachmentType.LEFT_HAND
  );

  console.log({ roman: roman.getWarriorInfo() });
  console.log({ spartan: spartan.getWarriorInfo() });
  console.log({ persian: persian.getWarriorInfo() });
}

main();
