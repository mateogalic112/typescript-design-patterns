import fs from "fs";
import readline from "readline";

export class LineReader {
  async *readLines(filePath: string) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileStream = fs.createReadStream(filePath);

    const lines = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    try {
      for await (const line of lines) {
        yield line;
      }
    } finally {
      fileStream.destroy();
    }
  }
}
