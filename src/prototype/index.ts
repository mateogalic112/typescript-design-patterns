import { Sniper } from "./Sniper";

function main() {
  const baseSniper = new Sniper({ speed: 5, strength: 10, range: 250 });
  const sniperClone = baseSniper.clone();
  const sniperClone2 = baseSniper.clone();
  const sniperClone3 = baseSniper.clone();

  sniperClone.attack(100); // Attacking 50
  sniperClone2.attack(300); // Out of range -> 0
  sniperClone3.attack(200); // Attacking 50
}

// Output:
// Executing heavy operation... (only once, during construction)
// Attacking 50
// Out of range
// Attacking 50

main();
