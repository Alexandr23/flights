import moment from "moment";

export const getTimeFormatted = (datetime: string) => {
  return moment.utc(datetime).format("HH:mm");
};
