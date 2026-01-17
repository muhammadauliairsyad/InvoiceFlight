import { formatInTimeZone, zonedTimeToUtc } from "date-fns-tz";
import { LOCAL_TIMEZONE } from "../config/constants";

export function toUtc(date: Date, timeZone = LOCAL_TIMEZONE) {
  return zonedTimeToUtc(date, timeZone);
}

export function formatWib(date: Date, pattern = "yyyy-MM-dd HH:mm:ss") {
  return formatInTimeZone(date, LOCAL_TIMEZONE, pattern);
}

export function formatUtc(date: Date, pattern = "yyyy-MM-dd HH:mm:ss") {
  return formatInTimeZone(date, "UTC", pattern);
}
