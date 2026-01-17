import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { toInputCsv, toOutputCsv } from "@/lib/export/toCsv";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") ?? "input";

  const services = await prisma.flightService.findMany({ orderBy: { ataUtc: "desc" } });
  const csv = format === "output" ? toOutputCsv(services) : toInputCsv(services);

  const bom = "\ufeff";
  return new NextResponse(bom + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=services-${format}.csv`
    }
  });
}
