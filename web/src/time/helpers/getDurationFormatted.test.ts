import { getDurationFormatted } from "./getDurationFormatted";

describe("getDurationFormatted", () => {
  test("hours and minutes", () => {
    const a = "2022-03-04T10:45:00.000Z";
    const b = "2022-03-04T14:25:00.000Z";

    expect(getDurationFormatted(a, b)).toEqual("3 hrs 40 mins");
  });

  test("one hour and minutes", () => {
    const a = "2022-03-04T13:15:00.000Z";
    const b = "2022-03-04T14:25:00.000Z";

    expect(getDurationFormatted(a, b)).toEqual("1 hr 10 mins");
  });

  test("hours and one minute", () => {
    const a = "2022-03-04T13:15:00.000Z";
    const b = "2022-03-04T15:16:00.000Z";

    expect(getDurationFormatted(a, b)).toEqual("2 hrs 1 min");
  });

  test("same date and time", () => {
    const a = "2022-03-04T13:15:00.000Z";
    const b = "2022-03-04T13:15:00.000Z";

    expect(getDurationFormatted(a, b)).toEqual("0 mins");
  });

  test("a > b", () => {
    const a = "2022-03-04T15:15:00.000Z";
    const b = "2022-03-04T14:25:00.000Z";

    expect(getDurationFormatted(a, b)).toEqual("");
  });

  test("invalid", () => {
    const a = "a";
    const b = "b";

    expect(getDurationFormatted(a, b)).toEqual("");
  });
});
