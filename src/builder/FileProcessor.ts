import fs from "fs";

export type Preprocessor = (data: string) => string;

export class FileProcessor {
  constructor(
    private readonly filePath: string,
    private readonly encoding: BufferEncoding,
    private readonly preprocessors: Array<Preprocessor>
  ) {}

  async process() {
    // Reads the entire contents of a file in memory
    const fileContent = await this.readFile();

    // Transforms file content for each preprocessor
    return this.preprocessors.reduce(
      (output, processor) => processor(output),
      fileContent
    );
  }

  private async readFile() {
    try {
      return fs.promises.readFile(this.filePath, {
        encoding: this.encoding,
      });
    } catch (error) {
      console.error(`Failed to read file ${this.filePath}: ${error}`);
      return "";
    }
  }
}
