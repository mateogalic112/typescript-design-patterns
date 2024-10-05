import { LineProcessor } from "./LineProcessor";

type Weapon = {
  weapon: string;
  damage: number;
};

export class WeaponProcessor extends LineProcessor<Weapon[]> {
  toWeapon(line: string): Weapon {
    const [weapon, damage] = line.split(" - ");

    return {
      weapon,
      damage: parseInt(damage.replace(" damage", ""), 10),
    };
  }

  async processData(filePath: string) {
    const weapons: Weapon[] = [];

    for await (const line of this.lineReader.readLines(filePath)) {
      weapons.push(this.toWeapon(line));
    }

    return weapons;
  }
}
