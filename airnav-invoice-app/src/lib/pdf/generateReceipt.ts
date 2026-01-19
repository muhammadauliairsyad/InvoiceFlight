import fs from "fs/promises";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { formatDateWib } from "../time/format";

export type ReceiptPayload = {
  receiptNo: string;
  date: Date;
  receivedFrom: string;
  amount: number;
  payment: string;
  amountPaid: number;
};

export async function generateReceiptPdf(payload: ReceiptPayload) {
  const templatePath = path.join(process.cwd(), "public", "templates", "receipt_template.pdf");
  try {
    const templateBytes = await fs.readFile(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const page = pdfDoc.getPage(0);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const drawText = (text: string, x: number, y: number) => {
      page.drawText(text, { x, y, size: 10, font, color: rgb(0, 0, 0) });
    };

    drawText(payload.receiptNo, 390, 760);
    drawText(formatDateWib(payload.date), 260, 640);
    drawText(payload.receivedFrom, 260, 610);
    drawText(payload.amount.toLocaleString("id-ID"), 340, 580);
    drawText(payload.payment, 260, 520);
    drawText(payload.amountPaid.toLocaleString("id-ID"), 340, 490);

    return pdfDoc.save();
  } catch (error) {
    throw new Error(
      "Template receipt_template.pdf tidak ditemukan. Letakkan file Lampiran 1 di public/templates."
    );
  }
}
