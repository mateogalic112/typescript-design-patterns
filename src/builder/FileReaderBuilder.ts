import { FileReader } from "./FileReader";

interface IFileReaderBuilder {
  setFilePath(path: string): IFileReaderBuilder;
  addPreprocessor(processor: (data: string) => string): IFileReaderBuilder;
  setEncoding(encoding: BufferEncoding): IFileReaderBuilder;
  build(): FileReader;
}

export class FileReaderBuilder implements IFileReaderBuilder {
  private filePath: string = "";
  private encoding: BufferEncoding = "utf-8";
  private preprocessors: ((data: string) => string)[] = [];

  setFilePath(path: string): IFileReaderBuilder {
    this.filePath = path;
    return this;
  }

  addPreprocessor(processor: (data: string) => string): IFileReaderBuilder {
    this.preprocessors.push(processor);
    return this;
  }

  setEncoding(encoding: BufferEncoding): IFileReaderBuilder {
    this.encoding = encoding;
    return this;
  }

  build(): FileReader {
    if (!this.filePath) throw new Error("File path is required");

    return new FileReader(this.filePath, this.encoding, this.preprocessors);
  }
}
