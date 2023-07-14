export abstract class Armor {
  abstract protect(): string;
}

export class BodyArmor implements Armor {
  public protect(): string {
    return "Protected with BodyArmor";
  }
}

export class Cloak implements Armor {
  public protect(): string {
    return "Protected with Cloak";
  }
}
