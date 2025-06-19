import { FileProcessor, Preprocessor } from "../FileProcessor";
import { FileProcessorBuilder } from "../FileProcessorBuilder";

describe("File Processor Builder functionality", () => {
  describe("Building file processor", () => {
    const TEXT_ENCODING = "utf-8";

    const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

    const removeUppercaseWords: Preprocessor = (data: string) =>
      data.replace(/\b[A-Z]+\b/g, "").trim();

    let fileProcessorBuilder: FileProcessorBuilder;

    beforeEach(() => {
      fileProcessorBuilder = new FileProcessorBuilder();
    });

    test("Should throw if file does not exists", () => {
      const fileProcessorConstruct = fileProcessorBuilder
        .setEncoding(TEXT_ENCODING)
        .addPreprocessor(toUpperCase);

      expect(() => fileProcessorConstruct.build()).toThrowError(
        "File path is required"
      );
    });

    test("Should return FileProcessor instance when only file path is provided", () => {
      const fileProcessor = fileProcessorBuilder
        .setFilePath("/some-path")
        .build();

      expect(fileProcessor).toBeInstanceOf(FileProcessor);
    });

    test("Should return FileProcessor instance with proper fields set", () => {
      const filePath = "/some-path";
      const encoding: BufferEncoding = "base64";

      const fileProcessor = fileProcessorBuilder
        .setFilePath(filePath)
        .setEncoding(encoding)
        .addPreprocessor(toUpperCase)
        .addPreprocessor(removeUppercaseWords)
        .build();

      expect(fileProcessor).toBeInstanceOf(FileProcessor);
      expect(fileProcessor).toMatchObject({
        filePath,
        encoding,
        preprocessors: [toUpperCase, removeUppercaseWords],
      });
    });
  });
});
