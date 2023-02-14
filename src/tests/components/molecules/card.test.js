import {render, screen} from "@testing-library/react";

import {Card} from "../../../components/molecules";

const props = {
  chipTitle: "zinc",
  title: "Some Card Title",
  price: 307,
  color: "pink"
};

test("render card", () => {
  render(<Card {...props} />);

  const color = screen.getByTestId("jc-color");
  const chip = screen.getByText("zinc");
  const title = screen.getByText(/some card title/i);
  const price = screen.getByText(/307/i);
  const button = screen.getByRole("button", {name: /add to cart/i});

  expect(color).toHaveStyle({background: "pink"});
  expect(chip).toHaveTextContent("zinc");
  expect(title).toHaveTextContent(/some card title/i);
  expect(price).toHaveTextContent(/307/i);
  expect(button).toBeInTheDocument();
});
