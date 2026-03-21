import fs from "fs";

export type Preprocessor = (data: string) => string;

export class FileProcessor {
  constructor(
    private readonly filePath: string,
    private readonly encoding: BufferEncoding,
    private readonly preprocessors: Array<Preprocessor>
  ) {}

  async process() {
    const rawContent = await this.getFileContent();
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
