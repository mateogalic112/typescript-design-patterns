import { FileReader, Preprocessor } from "./FileReader";
import { FileReaderBuilder } from "./FileReaderBuilder";

describe("File Reader Builder functionality", () => {
  describe("Building file reader", () => {
    const TEXT_ENCODING = "utf-8";

    const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

    const removeUppercaseWords: Preprocessor = (data: string) =>
      data.replace(/\b[A-Z]+\b/g, "").trim();

    let fileReaderBuilder: FileReaderBuilder;
    beforeEach(() => {
      fileReaderBuilder = new FileReaderBuilder();
    });

    test("Should throw if file does not exists", () => {
      const fileReaderConstruct = fileReaderBuilder
        .setEncoding(TEXT_ENCODING)
        .addPreprocessor(toUpperCase);

      expect(() => fileReaderConstruct.build()).toThrowError(
        "File path is required"
      );
    });

    test("Should return FileReader instance when only file path is provided", () => {
      const fileReader = fileReaderBuilder
        .setFilePath("/some-path")
        .build();

      expect(fileReader).toBeInstanceOf(FileReader);
    });

    test("Should return FileReader instance with proper fields set", () => {
      const filePath = "/some-path";
      const encoding: BufferEncoding = "base64";

      const fileReader = fileReaderBuilder
        .setFilePath(filePath)
        .setEncoding(encoding)
        .addPreprocessor(toUpperCase)
        .addPreprocessor(removeUppercaseWords)
        .build();

      expect(fileReader).toBeInstanceOf(FileReader);
      expect(fileReader).toMatchObject({
        filePath,
        encoding,
        preprocessors: [toUpperCase, removeUppercaseWords],
      });
    });
  });
});
