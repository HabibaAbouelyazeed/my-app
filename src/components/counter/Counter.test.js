import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter", () => {
  render(<Counter />);
  const count = screen.getByText(/10/i);
  expect(count).toBeInTheDocument();
});

test("renders increment btn", () => {
  render(<Counter />);
  const incBtn = screen.getByText(/\+/i);
  expect(incBtn).toBeInTheDocument();
});

test("renders decrement btn", () => {
  render(<Counter />);
  const decBtn = screen.getByText(/\-/i);
  expect(decBtn).toBeInTheDocument();
});

test("On increment btn click counter value increase", () => {
  render(<Counter />);
  const count = screen.getByText(/10/i);
  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent(/10/i);
  const incBtn = screen.getByRole("button", { name: /\+/i });
  fireEvent.click(incBtn);
  expect(count).toHaveTextContent(/11/i);
});


test("On decrement btn click counter value decrease", () => {
    render(<Counter />);
    const count = screen.getByText(/10/i);
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent(/10/i);
    const decBtn = screen.getByRole("button", { name: /\-/i });
    fireEvent.click(decBtn);
    expect(count).toHaveTextContent(/9/i);
  });