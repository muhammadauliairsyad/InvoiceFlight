import { formatInTimeZone } from "date-fns-tz";
import { LOCAL_TIMEZONE } from "../config/constants";

export function formatDateWib(date: Date, pattern = "dd MMMM yyyy") {
  return formatInTimeZone(date, LOCAL_TIMEZONE, pattern);
}

export function formatTimeRangeWib(start: Date, end: Date) {
  const startTime = formatInTimeZone(start, LOCAL_TIMEZONE, "HH:mm:ss");
  const endTime = formatInTimeZone(end, LOCAL_TIMEZONE, "HH:mm:ss");
  return `${startTime} - ${endTime}`;
}

export function formatDateUtc(date: Date, pattern = "dd MMMM yyyy") {
  return formatInTimeZone(date, "UTC", pattern);
}
