import { FileReader, Preprocessor } from "./FileReader";

describe("File Reader functionality", () => {
  describe("Parsing file", () => {
    const TEXT_ENCODING = "utf-8";

    const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

    const removeUppercaseWords: Preprocessor = (data: string) =>
      data.replace(/\b[A-Z]+\b/g, "").trim();

    test("Should throw if file does not exists", async () => {
      const FILE_PATH = "./src/builder/wrong-file.txt";

      const fileReader = new FileReader(FILE_PATH, TEXT_ENCODING, []);

      await expect(fileReader.readAndProcess()).rejects.toThrow();
    });

    test("It should return empty string if file is empty", async () => {
      const FILE_PATH = "./src/builder/test-empty-file.txt";
      const preprocessors = [removeUppercaseWords, toUpperCase];

      const fileReader = new FileReader(
        FILE_PATH,
        TEXT_ENCODING,
        preprocessors
      );

      const processedString = await fileReader.readAndProcess();

      expect(processedString).toBe("");
    });

    test("It first removes all uppercase words, then makes remaining words uppercased", async () => {
      const FILE_PATH = "./src/builder/test-file.txt";
      const preprocessors = [removeUppercaseWords, toUpperCase];

      const fileReader = new FileReader(
        FILE_PATH,
        TEXT_ENCODING,
        preprocessors
      );

      const processedString = await fileReader.readAndProcess();

      expect(processedString).toBe("AM JUST A DUMMY FILE!");
    });
  });
});
