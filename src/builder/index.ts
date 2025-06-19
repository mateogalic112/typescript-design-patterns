import { Preprocessor } from "./FileProcessor";
import { FileProcessorBuilder } from "./FileProcessorBuilder";

function main() {
  const fileProcessorBuilder = new FileProcessorBuilder();

  const toUpperCase: Preprocessor = (data: string) => data.toUpperCase();

  const removeUppercaseWords: Preprocessor = (data: string) =>
    data.replace(/\b[A-Z]+\b/g, "").trim();

  const removeExtraWhitespaces: Preprocessor = (data: string) =>
    data.replace(/(\S) {2,}(?=\S)/g, "$1 ");

  const fileProcessor = fileProcessorBuilder
    .setFilePath("./src/builder/crypto.txt")
    .setEncoding("utf-8")
    .addPreprocessor(removeUppercaseWords)
    .addPreprocessor(removeExtraWhitespaces)
    .addPreprocessor(toUpperCase)
    .build();

  fileProcessor.process().then(console.log).catch(console.error);
}

main();
