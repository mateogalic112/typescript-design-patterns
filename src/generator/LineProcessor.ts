import { LineReader } from "./LineReader";

export abstract class LineProcessor<T> {
  constructor(protected lineReader: LineReader) {}

  abstract transform(line: string): T;

  async processData(filePath: string): Promise<T[]> {
    const results: T[] = [];

    for await (const line of this.lineReader.readLines(filePath)) {
      results.push(this.transform(line));
    }

    return results;
  }
}
