import { FileReader, Preprocessor } from "./FileReader";

export class FileReaderBuilder {
  private filePath = "";
  private encoding: BufferEncoding = "utf-8";
  private preprocessors: Preprocessor[] = [];

  setFilePath(path: string) {
    this.filePath = path;
    return this;
  }

  addPreprocessor(processor: (data: string) => string) {
    this.preprocessors.push(processor);
    return this;
  }

  setEncoding(encoding: BufferEncoding) {
    this.encoding = encoding;
    return this;
  }

  build(): FileReader {
    if (!this.filePath) throw new Error("File path is required");

    return new FileReader(this.filePath, this.encoding, this.preprocessors);
  }
}
