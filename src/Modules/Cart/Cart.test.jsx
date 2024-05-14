import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
describe("Cart", () => {
  it("has close button", () => {
    render(<Cart />, { wrapper: BrowserRouter });
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").textContent).toBe("Back to shop");
  });
  it("if its empty, has 'Cart is empty' heading", () => {
    render(<Cart products={[]} />, { wrapper: BrowserRouter });
    expect(screen.queryByRole("list")).toBe(null);
    expect(screen.getByRole("heading").textContent).toBe("Cart is empty");
  });
  it("if has products, has list with products", () => {
    render(
      <Cart
        products={[
          {
            title: "Lorem ipsum",
            description: "lorem ipsum dolor sit admet",
            price: 32,
            image: "",
          },
        ]}
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Lorem ipsum" })
    ).toBeInTheDocument();
  });
});
