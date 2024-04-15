import fs from "fs";

export type Preprocessor = (data: string) => string;

export class FileReader {
  constructor(
    private filePath: string,
    private encoding: BufferEncoding,
    private preprocessors: Array<Preprocessor>
  ) {}

  async readAndProcess(): Promise<string> {
    try {
      let data = await fs.promises.readFile(this.filePath, {
        encoding: this.encoding,
      });

      this.preprocessors.forEach((processor) => {
        data = processor(data);
      });

      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
