import { FileProcessor, Preprocessor } from "./FileProcessor";

export class FileProcessorBuilder {
  private filePath = "";
  private encoding: BufferEncoding = "utf-8";
  private preprocessors: Preprocessor[] = [];

  setFilePath(path: string) {
    this.filePath = path;
    return this;
  }

  setEncoding(encoding: BufferEncoding) {
    this.encoding = encoding;
    return this;
  }

  addPreprocessor(processor: Preprocessor) {
    this.preprocessors.push(processor);
    return this;
  }

  build() {
    if (!this.filePath) throw new Error("File path is required");

    return new FileProcessor(this.filePath, this.encoding, this.preprocessors);
  }
}
