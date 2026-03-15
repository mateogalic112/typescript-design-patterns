import { Arsenal, Weapon } from "./Weapon";

function main() {
  const arsenal = new Arsenal();

  arsenal.add(new Weapon("AK-47"));
  arsenal.add(new Weapon("M4A1"));
  arsenal.add(new Weapon("AWP"));
  arsenal.add(new Weapon("M249"));

  const weapons = arsenal.createIterator();

  while (weapons.hasNext()) {
    weapons.next().fire();
  }
}

main();
