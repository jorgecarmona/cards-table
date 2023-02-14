import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

import {JCButton} from "../../../components/atoms";

const mockFunction = jest.fn();

const props = {text: "hello"};

test("displays button", () => {
  render(<JCButton {...props} />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toBeInTheDocument();
});

test("shows correct color", () => {
  render(<JCButton text="hello" color="red" />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toHaveStyle("background: red");
});

test("shows lg size correctly", () => {
  render(<JCButton text="hello" size="lg" />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toHaveClass("jc-button-lg");
});

test("shows sm size correctly", () => {
  render(<JCButton text="hello" size="sm" />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toHaveClass("jc-button-sm");
});

test("shows default class when wrong size is passed", () => {
  render(<JCButton text="Hola Juan" size="xx" />);

  const btn = screen.getByRole("button", {
    name: /Hola Juan/i
  });

  expect(btn).toHaveClass("jc-button-lg");
});

test("onClick function is called", () => {
  render(<JCButton text="hello" handleClick={mockFunction} />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  user.click(btn);

  expect(mockFunction).toHaveBeenCalled();
});

test("all props together", () => {
  const props = {
    text: "hello",
    handleClick: mockFunction,
    color: "blue",
    size: "md"
  };

  render(<JCButton {...props} />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  user.click(btn);

  expect(btn).toHaveStyle("background: blue");
  expect(btn).toHaveClass("jc-button-md");
  expect(mockFunction).toHaveBeenCalled();
});
