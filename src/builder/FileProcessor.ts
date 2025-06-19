import fs from "fs";

export type Preprocessor = (data: string) => string;

export class FileProcessor {
  constructor(
    private filePath: string,
    private encoding: BufferEncoding,
    private preprocessors: Array<Preprocessor>
  ) {}

  async process() {
    // Reads the entire contents of a file in memory
    let fileContent = await fs.promises.readFile(this.filePath, {
      encoding: this.encoding,
    });

    // Transforms file content for each preprocessor
    return this.preprocessors.reduce(
      (output, processor) => processor(output),
      fileContent
    );
  }
}
