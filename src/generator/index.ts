import path from "path";
import { WeaponProcessor } from "./processors/WeaponProcessor";
import { LineReader } from "./LineReader";
import { CityProcessor } from "./processors/CityProcessor";

async function main() {
  const lineReader = new LineReader();

  const cityProcessor = new CityProcessor(lineReader);
  for await (const city of cityProcessor.processData(
    "src/generator/data/cities.txt"
  )) {
    console.log("City:", city);
  }

  const weaponProcessor = new WeaponProcessor(lineReader);
  for await (const weapon of weaponProcessor.processData(
    "src/generator/data/weapons.txt"
  )) {
    console.log("Weapon:", weapon);
  }
}

main();
