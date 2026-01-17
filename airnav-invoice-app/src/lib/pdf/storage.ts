import fs from "fs/promises";
import path from "path";

const basePath = process.env.PDF_STORAGE_PATH ?? "./storage/pdf";

export async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

export async function savePdf(buffer: Uint8Array, kind: "receipt" | "breakdown" | "combined", filename: string) {
  const dir = path.join(basePath, kind);
  await ensureDir(dir);
  const filePath = path.join(dir, filename);
  await fs.writeFile(filePath, buffer);
  return filePath;
}
