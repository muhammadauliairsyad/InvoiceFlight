import { z } from "zod";

export const serviceSchema = z.object({
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
  useApp: z.boolean(),
  useTwr: z.boolean(),
  useAfis: z.boolean(),
  picDinas: z.string().min(1)
});
