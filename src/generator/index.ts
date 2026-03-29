import { WeaponProcessor } from "./WeaponProcessor";
import { LineReader } from "./LineReader";
import { CityProcessor } from "./CityProcessor";

async function main() {
  const lineReader = new LineReader();

  const cityProcessor = new CityProcessor(lineReader);
  for await (const city of cityProcessor.processData("src/generator/cities.txt")) {
    console.log("City:", city);
  }

  const weaponProcessor = new WeaponProcessor(lineReader);
  for await (const weapon of weaponProcessor.processData("src/generator/weapons.txt")) {
    console.log("Weapon:", weapon);
  }
}

main();
