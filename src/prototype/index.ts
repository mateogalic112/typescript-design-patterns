import { Sniper } from "./Sniper";

function main() {
  const baseSniper = new Sniper(5, 10, 250);
  const sniperClone = baseSniper.clone();
  const sniperClone2 = baseSniper.clone();
  const sniperClone3 = baseSniper.clone();

  sniperClone.attack();
  sniperClone2.attack();
  sniperClone3.attack();

  // Executing heavy operation...
  // Attacking 50
  // Attacking 50
  // Attacking 50
}

main();
