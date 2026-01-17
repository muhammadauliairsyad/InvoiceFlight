import { PDFDocument } from "pdf-lib";

export async function mergeCombined(receiptBytes: Uint8Array, breakdownBytes: Uint8Array) {
  const receiptDoc = await PDFDocument.load(receiptBytes);
  const breakdownDoc = await PDFDocument.load(breakdownBytes);
  const combined = await PDFDocument.create();

  const [receiptPage] = await combined.copyPages(receiptDoc, [0]);
  combined.addPage(receiptPage);

  const [breakdownPage] = await combined.copyPages(breakdownDoc, [0]);
  combined.addPage(breakdownPage);

  return combined.save();
}
