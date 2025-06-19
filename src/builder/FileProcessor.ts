import fs from "fs";

export type Preprocessor = (data: string) => string;

export class FileProcessor {
  constructor(
    private filePath: string,
    private encoding: BufferEncoding,
    private preprocessors: Array<Preprocessor>
  ) {}

  async process() {
    // Asynchronously reads the entire contents of a file.
    let data = await fs.promises.readFile(this.filePath, {
      encoding: this.encoding,
    });

    // Transforms entire contents of a file for each preprocessor
    return this.preprocessors.reduce(
      (output, processor) => processor(output),
      data
    );
  }
}
