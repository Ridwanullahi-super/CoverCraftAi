"use server";

import { parseOfficeAsync, OfficeParserConfig } from "officeparser";

export async function parseOffice(base64: string): Promise<string> {
  const config: OfficeParserConfig = {
    outputErrorToConsole: false,
    newlineDelimiter: "\n",
    ignoreNotes: false,
    putNotesAtLast: false,
  };
  const buffer = Buffer.from(base64, "base64");
  const result = await parseOfficeAsync(buffer, config);
  return result;
}
