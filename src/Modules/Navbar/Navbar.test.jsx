import { expect, it } from "vitest";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("Navbar", () => {
  it("renders propertly", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("has heading as logo", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading").textContent).toBe("eShop");
  });
  it("has two links: to homepage and shop", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const Links = screen.getAllByRole("link");
  });
  it("has shopping cart button");
});
