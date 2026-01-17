import { HOURLY_RATES } from "../config/rates";
import { VAT_RATE } from "../config/constants";

export type BillingInput = {
  serviceStartUtc: Date;
  serviceEndUtc: Date;
  useApp: boolean;
  useTwr: boolean;
  useAfis: boolean;
};

export type BillingOutput = {
  durationMinutes: number;
  billableHours: number;
  grossTotal: number;
  ppn: number;
  netTotal: number;
  unitRates: { app: number; twr: number; afis: number };
};

export function calculateBilling(input: BillingInput): BillingOutput {
  const durationMs = input.serviceEndUtc.getTime() - input.serviceStartUtc.getTime();
  const durationMinutes = Math.max(0, Math.ceil(durationMs / 60000));
  const billableHours = Math.max(1, Math.ceil(durationMinutes / 60));

  const appGross = input.useApp ? billableHours * HOURLY_RATES.APP : 0;
  const twrGross = input.useTwr ? billableHours * HOURLY_RATES.TWR : 0;
  const afisGross = input.useAfis ? billableHours * HOURLY_RATES.AFIS : 0;
  const grossTotal = appGross + twrGross + afisGross;
  const ppn = Math.round(grossTotal * VAT_RATE);
  const netTotal = grossTotal + ppn;

  return {
    durationMinutes,
    billableHours,
    grossTotal,
    ppn,
    netTotal,
    unitRates: {
      app: appGross,
      twr: twrGross,
      afis: afisGross
    }
  };
}
