import fs from "fs/promises";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { formatDateWib } from "../time/format";

export type BreakdownRow = {
  unit: string;
  start: string;
  end: string;
  duration: string;
  rate: number;
  gross: number;
};

export type BreakdownPayload = {
  receiptNo: string;
  date: Date;
  airline: string;
  rows: BreakdownRow[];
  grossTotal: number;
  ppn: number;
  netTotal: number;
};

export async function generateBreakdownPdf(payload: BreakdownPayload) {
  const templatePath = path.join(process.cwd(), "public", "templates", "breakdown_template.pdf");
  try {
    const templateBytes = await fs.readFile(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const page = pdfDoc.getPage(0);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const drawText = (text: string, x: number, y: number, size = 9) => {
      page.drawText(text, { x, y, size, font, color: rgb(0, 0, 0) });
    };

    drawText(payload.receiptNo, 400, 750, 9);
    drawText(formatDateWib(payload.date), 420, 730, 9);
    drawText(payload.airline, 120, 640, 9);

    let rowY = 440;
    payload.rows.forEach((row) => {
      drawText(row.unit, 90, rowY);
      drawText(row.start, 210, rowY);
      drawText(row.end, 260, rowY);
      drawText(row.duration, 320, rowY);
      drawText(row.rate.toLocaleString("id-ID"), 380, rowY);
      drawText(row.gross.toLocaleString("id-ID"), 460, rowY);
      rowY -= 18;
    });

    drawText(payload.grossTotal.toLocaleString("id-ID"), 460, 310);
    drawText(payload.ppn.toLocaleString("id-ID"), 460, 290);
    drawText(payload.netTotal.toLocaleString("id-ID"), 460, 270);

    return pdfDoc.save();
  } catch (error) {
    throw new Error(
      "Template breakdown_template.pdf tidak ditemukan. Letakkan file Lampiran 2 di public/templates."
    );
  }
}
