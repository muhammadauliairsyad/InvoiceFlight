import { FlightService } from "@prisma/client";

export function toInputCsv(rows: FlightService[]) {
  const headers = [
    "airline_operator_gh",
    "flight_type",
    "flight_number",
    "registration",
    "aircraft_type",
    "departure",
    "arrival",
    "arrival_date",
    "departure_date",
    "ata_utc",
    "atd_utc",
    "service_start_utc",
    "service_end_utc",
    "advance_extend",
    "unit_app",
    "unit_twr",
    "unit_afis",
    "pic_dinas"
  ];

  const lines = rows.map((row) =>
    [
      row.airlineOperatorGh,
      row.flightType,
      row.flightNumber,
      row.registration,
      row.aircraftType,
      row.departure,
      row.arrival,
      row.arrivalDate.toISOString(),
      row.departureDate.toISOString(),
      row.ataUtc.toISOString(),
      row.atdUtc.toISOString(),
      row.serviceStartUtc.toISOString(),
      row.serviceEndUtc.toISOString(),
      row.advanceExtend,
      row.useApp ? 1 : 0,
      row.useTwr ? 1 : 0,
      row.useAfis ? 1 : 0,
      row.picDinas
    ].join(",")
  );

  return [headers.join(","), ...lines].join("\n");
}

export function toOutputCsv(rows: FlightService[]) {
  const headers = [
    "seq_no",
    "receipt_no",
    "flight_type",
    "advance_extend",
    "duration_minutes",
    "billable_hours",
    "gross_total",
    "ppn",
    "net_total",
    "payment_status"
  ];

  const lines = rows.map((row) =>
    [
      row.seqNo,
      row.receiptNo,
      row.flightType,
      row.advanceExtend,
      row.durationMinutes,
      row.billableHours,
      row.grossTotal,
      row.ppn,
      row.netTotal,
      row.paymentStatus
    ].join(",")
  );

  return [headers.join(","), ...lines].join("\n");
}
