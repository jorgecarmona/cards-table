import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../../pages/app";

test("renders application", () => {
  render(<App />);

  const addToCartBtn = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  expect(addToCartBtn.length).toBe(6);
});

test("load more button adds 6 more cards", () => {
  render(<App />);

  const addToCartBtn = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  const loadMoreBtn = screen.getByRole("button", {
    name: /load more/i
  });

  expect(addToCartBtn.length).toBe(6);

  user.click(loadMoreBtn);

  const addToCartBtn2 = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  expect(addToCartBtn2.length).toBe(12);
});
