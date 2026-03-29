import { LineReader } from "./LineReader";

export abstract class LineProcessor<T> {
  constructor(protected lineReader: LineReader) {}

  abstract transform(line: string): T;

  async *processData(filePath: string): AsyncGenerator<T> {
    for await (const line of this.lineReader.readLines(filePath)) {
      yield this.transform(line);
    }
  }
}
