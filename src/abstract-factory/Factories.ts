import { Armor, BodyArmor, Cloak } from "./Armor";
import { MageFireball, Sword, Weapon } from "./Weapon";

export interface AbstractFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
}

export class WarriorFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new Sword();
  }

  public createArmor(): Armor {
    return new BodyArmor();
  }
}

export class MageFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new MageFireball();
  }

  public createArmor(): Armor {
    return new Cloak();
  }
}
