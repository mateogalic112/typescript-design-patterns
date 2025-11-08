import { Warrior, WarriorType } from "./Warrior";

export class WarriorFactory {
  static createWarrior(warriorType: WarriorType): Warrior {
    switch (warriorType) {
      case WarriorType.ROMAN:
        return new Roman();
      case WarriorType.SPARTAN:
        return new Spartan();
      case WarriorType.PERSIAN:
        return new Persian();
    }
  }
}

export class Roman extends Warrior {
  constructor() {
    super(100, 100);
  }
}

export class Spartan extends Warrior {
  constructor() {
    super(100, 100);
  }
}

export class Persian extends Warrior {
  constructor() {
    super(100, 100);
  }
}
