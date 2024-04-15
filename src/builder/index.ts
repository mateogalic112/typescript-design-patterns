import { Preprocessor } from "./FileReader";
import { FileReaderBuilder } from "./FileReaderBuilder";

function main() {
  const fileReaderBuilder = new FileReaderBuilder();

  const root = "./src/builder";
  const fileName = "test.txt";

  const textEncoding = "utf-8";

  const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

  const removeUppercaseWordsRegex = /\b[A-Z]+\b/g;
  const removeUppercaseWords: Preprocessor = (data: string) =>
    data.replace(removeUppercaseWordsRegex, "");

  const fileReader = fileReaderBuilder
    .setFilePath(`${root}/${fileName}`)
    .setEncoding(textEncoding)
    .addPreprocessor(removeUppercaseWords)
    .addPreprocessor(toUpperCase)
    .build();

  fileReader.readAndProcess().then(console.log).catch(console.error);
}

main();
