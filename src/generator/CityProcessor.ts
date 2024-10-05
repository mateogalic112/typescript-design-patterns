import { LineProcessor } from "./LineProcessor";

type City = {
  name: string;
  population: number;
};

export class CityProcessor extends LineProcessor<City[]> {
  toCity(line: string): City {
    const [name, population] = line.split(" - ");

    return {
      name,
      population: parseInt(population.replace(/,/g, ""), 10),
    };
  }

  async processData(filePath: string) {
    const cities: City[] = [];

    for await (const line of this.lineReader.readLines(filePath)) {
      cities.push(this.toCity(line));
    }

    return cities;
  }
}
