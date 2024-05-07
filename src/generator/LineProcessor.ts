import { LineReader } from "./LineReader";

export abstract class LineProcessor<T> {
  constructor(protected lineReader: LineReader) {}

  abstract processData(line: string): Promise<T>;
}
