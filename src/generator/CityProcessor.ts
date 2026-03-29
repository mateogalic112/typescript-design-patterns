import { LineProcessor } from "./LineProcessor";

type City = {
  name: string;
  population: number;
};

export class CityProcessor extends LineProcessor<City> {
  transform(line: string): City {
    const [name, rawPopulation] = line.split(" - ");
    return {
      name,
      population: this.parsePopulation(rawPopulation),
    };
  }

  private parsePopulation(raw: string): number {
    const parsed = parseInt(raw.replace(/,/g, ""), 10);
    if (Number.isNaN(parsed)) {
      throw new Error(
        `Invalid population format, expected number, received: ${raw}`
      );
    }
    return parsed;
  }
}
