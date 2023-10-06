export interface MessageData {
  read(language: string): Promise<string>;
}
