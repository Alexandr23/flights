import moment from "moment";

export const getDurationFormatted = (a: string, b: string): string => {
  const aDate = moment.utc(a);
  const bDate = moment.utc(b);

  if (!aDate.isValid() || !bDate.isValid()) {
    return "";
  }

  if (bDate.isBefore(aDate)) {
    return "";
  }

  const diff = bDate.diff(aDate);
  const duration = moment.duration(diff);

  const hours = duration.hours();
  const minutes = duration.minutes();

  const minuteUnits = minutes === 1 ? "min" : "mins";

  if (hours) {
    const hourUnits = hours === 1 ? "hr" : "hrs";
    return `${hours} ${hourUnits} ${minutes} ${minuteUnits}`;
  }

  return `${minutes} ${minuteUnits}`;
};
