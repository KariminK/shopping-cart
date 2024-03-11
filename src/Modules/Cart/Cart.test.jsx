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
  it("if its empty, has 'Cart is empty' heading", () => {
    render(<Cart products={[]} />);
    expect(screen.queryByRole("list")).toBe(null);
    expect(screen.getByRole("heading").textContent).toBe("Cart is empty");
  });
  it("if has products, has list with products", () => {
    render(
      <Cart
        products={[
          {
            name: "Lorem ipsum",
            description: "lorem ipsum dolor sit admet",
            price: 32,
            image: "",
          },
        ]}
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Lorem ipsum" })
    ).toBeInTheDocument();
  });
});
