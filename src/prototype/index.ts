import { Sniper } from "./Sniper";

function main() {
  const baseSniper = new Sniper({ speed: 5, strength: 10, range: 250 });
  const sniperClone = baseSniper.clone();
  const sniperClone2 = baseSniper.clone();
  const sniperClone3 = baseSniper.clone();

  sniperClone.attack(100);
  sniperClone2.attack(300);
  sniperClone3.attack(200);

  // Executing heavy operation...
  // Attacking 50
  // 0 (out of range)
  // Attacking 50
}

main();
