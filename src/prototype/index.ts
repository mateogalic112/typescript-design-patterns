import { Sniper } from "./Sniper";

function main() {
  const baseSniper = new Sniper(100, 5, 10, 250);
  const sniperClone = baseSniper.clone();
  const sniperClone2 = baseSniper.clone();
  const sniperClone3 = baseSniper.clone();

  sniperClone.move(); // Outputs: 'Moving'
  sniperClone.attack(); // Outputs: 'Attacking'

  sniperClone2.move(); // Outputs: 'Moving'
  sniperClone2.attack(); // Outputs: 'Attacking'

  sniperClone3.move(); // Outputs: 'Moving'
  sniperClone3.attack(); // Outputs: 'Attacking'
}

main();
