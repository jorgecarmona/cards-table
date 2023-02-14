import {render, screen} from "@testing-library/react";

import {JCColor} from "../../../components/atoms";

describe("src/components/atoms/jc-color", () => {
  test("renders component", () => {
    render(<JCColor color="blue" />);

    const element = screen.getByTestId("jc-color");

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle("background: blue");
  });
});
