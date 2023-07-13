import { Archer } from "./Archer";
import { Knight } from "./Knight";
import { Warrior } from "./Warrior";

export enum WarriorType {
  ARCHER,
  KNIGHT,
}

export class WarriorFactory {
  static createWarrior(warriorType: WarriorType): Warrior {
    switch (warriorType) {
      case WarriorType.ARCHER:
        return new Archer(10);
      case WarriorType.KNIGHT:
        return new Knight(10);
      default:
        throw new Error("Unsupported warrior type");
    }
  }
}
