import { WeaponProcessor } from "./WeaponProcessor";
import { LineReader } from "./LineReader";
import { CityProcessor } from "./CityProcessor";

function main() {
  const lineReader = new LineReader();

  const cityProcessor = new CityProcessor(lineReader);
  cityProcessor.processData("src/generator/cities.txt").then((cities) => {
    console.log("Cities list:", cities);
  });

  const weaponProcessor = new WeaponProcessor(lineReader);
  weaponProcessor
    .processData("src/generator/weapons.txt")
    .then((weapons) => {
      console.log("Weapons list:", weapons);
    });
}

main();
