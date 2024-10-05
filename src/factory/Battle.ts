import { Warrior } from "./Warrior";

export class Battle {
  constructor(
    private warriorOne: Warrior,
    private warriorTwo: Warrior,
    private attackTurn: number = Math.random() > 0.5 ? 0 : 1,
    private messages: string[] = []
  ) {}

  start() {
    while (
      this.warriorOne.getHealth() > 0 &&
      this.warriorTwo.getHealth() > 0
    ) {
      if (this.attackTurn % 2 === 0) {
        this.attackOpponent(this.warriorOne, this.warriorTwo);
      } else {
        this.attackOpponent(this.warriorTwo, this.warriorOne);
      }
    }
  }

  private attackOpponent(attacker: Warrior, defender: Warrior) {
    const damage = attacker.attack();
    defender.receiveDamage(damage);
    this.messages.push(
      `${attacker.getName()} attacks with ${damage} damage.`
    );

    if (defender.getHealth() === 0) {
      this.messages.push(
        `${defender.getName()} died. ${attacker.getName()} won!`
      );
    } else {
      this.messages.push(
        `${defender.getName()} has ${defender.getHealth()} health remaining`
      );
    }

    this.messages.push("-------------------");
    this.attackTurn++;
  }

  public getMessages() {
    return this.messages;
  }
}
