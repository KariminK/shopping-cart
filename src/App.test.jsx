import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("should render homepage on start", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: "Come on and buy best products in cheapest prices",
      })
    ).toBeInTheDocument();
  });
  it("should render shop on 'shop' link click", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: "Come on and buy best products in cheapest prices",
      })
    ).toBeInTheDocument();
  });
});
