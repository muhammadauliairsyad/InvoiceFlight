import { NextResponse } from "next/server";
import { parseCsv } from "@/lib/csv/parse";
import { validateImportRows } from "@/lib/csv/validate";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = parseCsv(body.content ?? "");
  const validations = validateImportRows(parsed.rows);

  return NextResponse.json({ headers: parsed.headers, preview: validations });
}
