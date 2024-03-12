import ErrorPage from "./Error";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";

describe("Error page", () => {
  it("has an 'Oops an error has occured' heading", () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading").textContent).toBe(
      "Oops, an error has occured"
    );
  });
  it("has a 'Go back to homepage' link", () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(screen.getByRole("link").textContent).toBe("Go back to homepage");
  });
});
