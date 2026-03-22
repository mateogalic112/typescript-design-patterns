import { Sniper } from "./Sniper";

function main() {
  const baseSniper = new Sniper({ speed: 5, strength: 10, range: 250 });
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
