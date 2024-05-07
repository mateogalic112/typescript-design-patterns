import fs from "fs";
import readline from "readline";

export class LineReader {
  async *readLines(filePath: string) {
    const fileStream = fs.createReadStream(filePath, { encoding: "utf-8" });

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      yield line;
    }
  }
}
