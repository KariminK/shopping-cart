import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { expect } from "vitest";
describe("Cart", () => {
  it("renders propertly", () => {
    render(<Cart />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("has close button", () => {
    render(<Cart />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button").textContent).toBe("X");
  });
  it("if its empty, has 'Cart is empty' heading");
  it("if has products, has list with products");
});
