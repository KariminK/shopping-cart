import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("should render homepage on start", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("heading", {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      })
    ).toBeInTheDocument();
  });
  it("should render shop on 'shop' link click", async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("heading", {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      })
    ).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "Shop" });
    const user = userEvent.setup();
    await user.click(link);
    expect(
      screen.queryByRole("heading", {
        name: "Products:",
      })
    ).toBeInTheDocument;
  });
  it("should render error page on bad route", () => {
    const badRoute = "/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Oops, an error has occured")).toBeInTheDocument();
  });
});
