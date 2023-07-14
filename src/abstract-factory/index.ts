import { AbstractFactory, MageFactory, WarriorFactory } from "./Factories";

function main() {
  function clientCode(factory: AbstractFactory) {
    const weapon = factory.createWeapon();
    const armor = factory.createArmor();

    console.log(weapon.attack());
    console.log(armor.protect());
  }

  clientCode(new WarriorFactory());
  clientCode(new MageFactory());
}

main();
