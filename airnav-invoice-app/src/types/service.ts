import { AdvanceExtend, FlightType, PaymentStatus } from "@prisma/client";

export type ServiceFormInput = {
  airlineOperatorGh: string;
  flightType: FlightType;
  flightNumber: string;
  registration: string;
  aircraftType: string;
  departure: string;
  arrival: string;
  arrivalDate: Date;
  departureDate: Date;
  ataUtc: Date;
  atdUtc: Date;
  serviceStartUtc: Date;
  serviceEndUtc: Date;
  advanceExtend: AdvanceExtend;
  useApp: boolean;
  useTwr: boolean;
  useAfis: boolean;
  picDinas: string;
};

export type ServiceSummary = {
  id: string;
  seqNo: number;
  receiptNo: string;
  flightType: FlightType;
  netTotal: number;
  paymentStatus: PaymentStatus;
};
