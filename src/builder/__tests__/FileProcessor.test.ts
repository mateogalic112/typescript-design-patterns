import { FileProcessor, Preprocessor } from "../FileProcessor";

describe("File Processor functionality", () => {
  const TEXT_ENCODING = "utf-8";

  const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

  const removeUppercaseWords: Preprocessor = (data: string) =>
    data.replace(/\b[A-Z]+\b/g, "").trim();

  test("should throw if file does not exists", async () => {
    const FILE_PATH = "./src/builder/__tests__/wrong-file.txt";

    const fileProcessor = new FileProcessor(FILE_PATH, TEXT_ENCODING, []);

    await expect(fileProcessor.process()).rejects.toThrow();
  });

  test("should return empty string if file is empty", async () => {
    const FILE_PATH = "./src/builder/__tests__/test-empty-file.txt";
    const preprocessors = [removeUppercaseWords, toUpperCase];

    const fileProcessor = new FileProcessor(
      FILE_PATH,
      TEXT_ENCODING,
      preprocessors
    );

    const processedFile = await fileProcessor.process();

    expect(processedFile).toBe("");
  });

  test("should first remove all uppercase words, then make remaining words uppercased", async () => {
    const FILE_PATH = "./src/builder/__tests__/test-file.txt";
    const preprocessors = [removeUppercaseWords, toUpperCase];

    const fileProcessor = new FileProcessor(
      FILE_PATH,
      TEXT_ENCODING,
      preprocessors
    );

    const processedFile = await fileProcessor.process();

    expect(processedFile).toBe("AM JUST A DUMMY FILE!");
  });
});
