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

    test("Should return FileProcessor that applies configured preprocessors", async () => {
      const filePath = "./src/builder/__tests__/test-file.txt";

      const fileProcessor = fileProcessorBuilder
        .setFilePath(filePath)
        .setEncoding(TEXT_ENCODING)
        .addPreprocessor(removeUppercaseWords)
        .addPreprocessor(toUpperCase)
        .build();

      const result = await fileProcessor.process();

      expect(fileProcessor).toBeInstanceOf(FileProcessor);
      expect(result).toBe("AM JUST A DUMMY FILE!");
    });
  });
});
