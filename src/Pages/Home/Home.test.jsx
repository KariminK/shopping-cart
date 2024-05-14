import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Homepage", () => {
  it("Should have heading", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("heading", {
        name: "Come and discover multiple $tuff",
      })
    ).toBeInTheDocument();
  });
});
