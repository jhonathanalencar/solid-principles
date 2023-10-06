import fs from "fs/promises";

import { MessageData } from "./MessageData";

export class MessageDataFile implements MessageData {
  async read(language: string): Promise<string> {
    return fs.readFile(`./message/${language}.txt`, "utf-8");
  }
}
