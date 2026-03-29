import { LineReader } from "./LineReader";

export abstract class LineProcessor<T> {
  constructor(protected lineReader: LineReader) {}

  abstract processData(path: string): Promise<T>;
}
