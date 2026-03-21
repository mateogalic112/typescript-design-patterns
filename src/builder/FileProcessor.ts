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
    const rawContent = await this.getFileContent();

    // Transforms file content for each preprocessor
    return this.preprocessors.reduce(this.intoProcessedContent, rawContent);
  }

  private async getFileContent() {
    return fs.promises.readFile(this.filePath, {
      encoding: this.encoding,
    });
  }

  private intoProcessedContent = (output: string, processor: Preprocessor) => {
    return processor(output);
  };
}
