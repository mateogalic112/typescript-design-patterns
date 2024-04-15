import fs from "fs";

export class FileReader {
  constructor(
    private filePath: string,
    private encoding: BufferEncoding,
    private preprocessors: Array<(data: string) => string>
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
