import { LineProcessor } from "./LineProcessor";

type Weapon = {
  weapon: string;
  damage: number;
};

export class WeaponProcessor extends LineProcessor<Weapon> {
  transform(line: string) {
    const [weapon, rawDamage] = line.split(" - ");
    return {
      weapon,
      damage: this.parseDamage(rawDamage),
    };
  }

  private parseDamage(raw: string): number {
    const parsed = parseInt(raw.replace(" damage", ""), 10);
    if (Number.isNaN(parsed)) {
      throw new Error(
        `Invalid damage format, expected number, received: ${raw}`
      );
    }
    return parsed;
  }
}
