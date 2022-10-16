import moment from "moment";

export const getDurationFormatted = (a: string, b: string) => {
  const diff = moment.utc(b).diff(moment.utc(a));
  const duration = moment.duration(diff);

  const hours = duration.hours();
  const minutes = duration.minutes();

  if (hours) {
    return `${hours} hrs ${minutes} mins`;
  }

  return `${minutes} mins`;
};
