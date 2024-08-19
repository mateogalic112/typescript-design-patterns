import { FileReader, Preprocessor } from "./FileReader";

describe("File Reader functionality", () => {
  describe("Parsing file", () => {
    test("It first removes all uppercase words, then makes remaining words uppercased", async () => {
      const toUpperCase: Preprocessor = (data: string) =>
        data.toUpperCase();

      const removeUppercaseWords: Preprocessor = (data: string) =>
        data.replace(/\b[A-Z]+\b/g, "").trim();

      const FILE_PATH = "./src/builder/test.txt";
      const TEXT_ENCODING = "utf-8";
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
