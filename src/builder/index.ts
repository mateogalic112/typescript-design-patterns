import { Preprocessor } from "./FileReader";
import { FileReaderBuilder } from "./FileReaderBuilder";

function main() {
  const fileReaderBuilder = new FileReaderBuilder();

  const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

  const removeUppercaseWords: Preprocessor = (data: string) =>
    data.replace(/\b[A-Z]+\b/g, "").trim();

  const removeExtraWhitespaces: Preprocessor = (data: string) =>
    data.replace(/(\S) {2,}(?=\S)/g, "$1 ");

  const fileReader = fileReaderBuilder
    .setFilePath("./src/builder/crypto.txt")
    .setEncoding("utf-8")
    .addPreprocessor(removeUppercaseWords)
    .addPreprocessor(removeExtraWhitespaces)
    .addPreprocessor(toUpperCase)
    .build();

  fileReader.readAndProcess().then(console.log).catch(console.error);
}

main();
