import { Battle } from "./Battle";
import { WarriorFactory, WarriorType } from "./WarriorFactory";

function main() {
  const archer = WarriorFactory.createWarrior(WarriorType.ARCHER);
  const knight = WarriorFactory.createWarrior(WarriorType.KNIGHT);

  const battle = new Battle(archer, knight);
  battle.start();

  console.log(battle.getMessages());
}

main();
