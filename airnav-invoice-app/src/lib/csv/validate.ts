import { z } from "zod";

export const importRowSchema = z.object({
  airlineOperatorGh: z.string().min(1),
  flightType: z.enum(["DOM", "INT"]),
  flightNumber: z.string().min(1),
  registration: z.string().min(1),
  aircraftType: z.string().min(1),
  departure: z.string().min(1),
  arrival: z.string().min(1),
  arrivalDate: z.string().min(1),
  departureDate: z.string().min(1),
  ataUtc: z.string().min(1),
  atdUtc: z.string().min(1),
  serviceStartUtc: z.string().min(1),
  serviceEndUtc: z.string().min(1),
  advanceExtend: z.enum(["ADVANCE", "EXTEND"]),
  useApp: z.union([z.literal("1"), z.literal("0"), z.boolean()]),
  useTwr: z.union([z.literal("1"), z.literal("0"), z.boolean()]),
  useAfis: z.union([z.literal("1"), z.literal("0"), z.boolean()]),
  picDinas: z.string().min(1)
});

export function validateImportRows(rows: Record<string, string>[]) {
  return rows.map((row, index) => {
    const result = importRowSchema.safeParse(row);
    return {
      index,
      success: result.success,
      data: result.success ? result.data : null,
      error: result.success ? null : result.error
    };
  });
}
