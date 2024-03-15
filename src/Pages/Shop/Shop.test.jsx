import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Shop", () => {
  it("renders propertly", () => {
    render(<Shop />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("heading", { name: "Products:" })
    ).toBeInTheDocument();
  });
  it("renders products given in props", () => {});
});
