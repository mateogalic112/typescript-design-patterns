import path from "path";
import { LineReader } from "./LineReader";
import { City, CityProcessor } from "./processors/CityProcessor";
import { Weapon, WeaponProcessor } from "./processors/WeaponProcessor";

const DATA_DIR = path.resolve(__dirname, "data");
const CITIES_FILE = path.resolve(DATA_DIR, "cities.txt");
const WEAPONS_FILE = path.resolve(DATA_DIR, "weapons.txt");

describe("LineReader", () => {
  let lineReader: LineReader;

  beforeEach(() => {
    lineReader = new LineReader();
  });

  test("should throw on non-existent file", async () => {
    const gen = lineReader.readLines("non-existent.txt");

    await expect(gen.next()).rejects.toThrow(
      "File not found: non-existent.txt"
    );
  });

  test("should yield all lines from a file", async () => {
    const lines: string[] = [];

    for await (const line of lineReader.readLines(CITIES_FILE)) {
      lines.push(line);
    }

    expect(lines.length).toBe(10);
    expect(lines[0]).toBe("Berlin - 3,645,000");
  });
});

describe("CityProcessor", () => {
  let processor: CityProcessor;

  beforeEach(() => {
    processor = new CityProcessor(new LineReader());
  });

  test("should transform a line into a City", () => {
    const city = processor.transform("Berlin - 3,645,000");

    expect(city).toMatchObject({ name: "Berlin", population: 3645000 });
  });

  test("should process all cities from file", async () => {
    const cities: City[] = [];

    for await (const city of processor.processData(CITIES_FILE)) {
      cities.push(city);
    }

    expect(cities.length).toBe(10);
    expect(cities[0]).toMatchObject({ name: "Berlin", population: 3645000 });
    expect(cities[9]).toMatchObject({
      name: "Los Angeles",
      population: 3979000,
    });
  });

  test("should throw on invalid population format", () => {
    expect(() => processor.transform("Berlin - abc")).toThrow(
      "Invalid population format"
    );
  });
});

describe("WeaponProcessor", () => {
  let processor: WeaponProcessor;

  beforeEach(() => {
    processor = new WeaponProcessor(new LineReader());
  });

  test("should transform a line into a Weapon", () => {
    const weapon = processor.transform("AK-47 - 100 damage");

    expect(weapon).toMatchObject({ weapon: "AK-47", damage: 100 });
  });

  test("should process all weapons from file", async () => {
    const weapons: Weapon[] = [];

    for await (const weapon of processor.processData(WEAPONS_FILE)) {
      weapons.push(weapon);
    }

    expect(weapons.length).toBe(10);
    expect(weapons[0]).toMatchObject({ weapon: "AK-47", damage: 100 });
    expect(weapons[9]).toMatchObject({
      weapon: "Morning Star (Medieval Mace)",
      damage: 60,
    });
  });

  test("should throw on invalid damage format", () => {
    expect(() => processor.transform("Sword - xyz")).toThrow(
      "Invalid damage format"
    );
  });
});
