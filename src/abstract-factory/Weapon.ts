export abstract class Weapon {
  abstract attack(): string;
}

export class Sword extends Weapon {
  public attack(): string {
    return "Attacking with Sword";
  }
}

export class MageFireball extends Weapon {
  public attack(): string {
    return "Attacking with MageFireball";
  }
}
