import { expect, it } from "vitest";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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
    expect(Links[0].textContent).toBe("Home");
    expect(Links[1].textContent).toBe("Shop");
  });
  it("doesn't have shopping cart button", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.queryByRole("button")).toBe(null);
  });
  it("has shopping cart button", () => {
    render(<Navbar hasCart={true} />, { wrapper: BrowserRouter });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("calls callback on cart click propertly", async () => {
    const cartClickHandle = vi.fn();
    render(<Navbar hasCart={true} onCartClick={cartClickHandle} />, {
      wrapper: BrowserRouter,
    });
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(cartClickHandle).toBeCalled();
  });
});
