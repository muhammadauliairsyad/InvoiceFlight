import { CSV_HEADER_ALIASES } from "./mapping";

export type ParsedCsvRow = Record<string, string>;

function normalizeHeader(header: string) {
  return header.trim().toLowerCase();
}

export function parseCsv(content: string) {
  const lines = content.trim().split(/\r?\n/);
  const rawHeaders = lines.shift()?.split(",") ?? [];
  const headers = rawHeaders.map((header) => {
    const key = normalizeHeader(header);
    return CSV_HEADER_ALIASES[key] ?? key;
  });

  const rows = lines.map((line) => {
    const values = line.split(",");
    return headers.reduce<ParsedCsvRow>((acc, header, index) => {
      acc[header] = values[index]?.trim() ?? "";
      return acc;
    }, {});
  });

  return { headers, rows };
}
