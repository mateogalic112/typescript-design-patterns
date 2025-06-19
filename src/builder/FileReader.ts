import fs from "fs";

export type Preprocessor = (data: string) => string;

export class FileReader {
  constructor(
    private filePath: string,
    private encoding: BufferEncoding,
    private preprocessors: Array<Preprocessor>
  ) {}

  async readAndProcess(): Promise<string> {
    // Asynchronously reads the entire contents of a file.
    let data = await fs.promises.readFile(this.filePath, {
      encoding: this.encoding,
    });

    // Transforms entire contents of a file for each preprocessor
    this.preprocessors.forEach((processor) => {
      data = processor(data);
    });

    return data;
  }
}
