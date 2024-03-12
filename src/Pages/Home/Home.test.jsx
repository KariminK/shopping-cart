import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { expect } from "vitest";

describe("Homepage", () => {
  it("Should have heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("Should have navbar");
});
