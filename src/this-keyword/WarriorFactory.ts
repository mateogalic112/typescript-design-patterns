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

class Roman extends Warrior {
  constructor() {
    super(100, 100, WarriorType.ROMAN);
  }
}

class Spartan extends Warrior {
  constructor() {
    super(100, 100, WarriorType.SPARTAN);
  }
}

class Persian extends Warrior {
  constructor() {
    super(100, 100, WarriorType.PERSIAN);
  }
}
