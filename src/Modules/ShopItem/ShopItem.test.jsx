import { screen, render } from "@testing-library/react";
import ShopItem from "./ShopItem";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Shop item", () => {
  it("renders propertly in list mode", () => {
    render(<ShopItem />, { wrapper: BrowserRouter });
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
  it("renders propertly in grid mode", () => {
    render(<ShopItem gridMode={true} />, { wrapper: BrowserRouter });
    expect(screen.queryByRole("listitem")).toBe(null);
    expect(screen.getByRole("gridcell")).toBeInTheDocument();
  });
  it("has product's image", () => {
    render(<ShopItem />, { wrapper: BrowserRouter });
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("has product's name as heading", () => {
    render(<ShopItem name="Example Product" />, {
      wrapper: BrowserRouter,
    }),
      expect(screen.getAllByRole("heading")[0].textContent).toBe(
        "Example Product"
      );
  });
  it("has product's price as heading 2", () => {
    render(<ShopItem price={32} />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole("heading")[1].textContent).toBe("32.00$");
  });
  it("has first 50 chars of product's description in paragraph", () => {
    render(
      <ShopItem
        gridMode={true}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam blanditiis enim quo, laudantium repellat commodi nihil? Aperiam, ut ex."
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.getAllByRole("paragraph")[0].textContent).toBe(
      "Lorem ipsum dolor sit amet consectetur adipisicing..."
    );
  });
});
