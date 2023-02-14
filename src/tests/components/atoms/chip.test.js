import {render, screen} from "@testing-library/react";

import {JCChip} from "../../../components/atoms";

test("renders chip", () => {
  render(<JCChip text="gold" />);

  const chip = screen.getByText("gold");

  expect(chip).toBeInTheDocument();
});
