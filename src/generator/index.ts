import path from "path";
import { WeaponProcessor } from "./WeaponProcessor";
import { LineReader } from "./LineReader";
import { CityProcessor } from "./CityProcessor";

const DATA_DIR = path.resolve(__dirname, "..", "..", "src", "generator");

async function main() {
  const lineReader = new LineReader();

  const cityProcessor = new CityProcessor(lineReader);
  for await (const city of cityProcessor.processData(path.resolve(DATA_DIR, "cities.txt"))) {
    console.log("City:", city);
  }

  const weaponProcessor = new WeaponProcessor(lineReader);
  for await (const weapon of weaponProcessor.processData(path.resolve(DATA_DIR, "weapons.txt"))) {
    console.log("Weapon:", weapon);
  }
}

main();
