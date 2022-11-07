import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
  test("renders children", () => {
    const { getByText } = render(<Button>Test</Button>);

    expect(getByText("Test")).toBeInTheDocument();
  });

  test("invoke a click handler", async () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    const element = getByText("Test");

    await userEvent.click(element);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
