import { AbstractFactory, MageFactory, KnightFactory } from "./Factories";

function main() {
  function createWarrior(factory: AbstractFactory) {
    const weapon = factory.createWeapon();
    const armor = factory.createArmor();

    console.log(weapon.attack());
    console.log(armor.protect());
  }

  createWarrior(new KnightFactory());
  createWarrior(new MageFactory());
}

main();
