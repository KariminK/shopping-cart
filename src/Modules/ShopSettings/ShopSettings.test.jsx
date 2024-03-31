import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import ShopSettings from "./ShopSettings";
import userEvent from "@testing-library/user-event";

describe("Shop settings", () => {
  it("renders propertly", () => {
    render(<ShopSettings />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
  it("has grid to list mode switch button", () => {
    render(<ShopSettings />);
    expect(
      screen.getByRole("button", { name: "list mode" })
    ).toBeInTheDocument();
  });
  it("has min and max price inputs", () => {
    render(<ShopSettings />);
    expect(screen.getByLabelText("Min. price:")).toBeInTheDocument();
    expect(screen.getByLabelText("Max. price:")).toBeInTheDocument();
  });
  it("has product categories select", () => {
    render(<ShopSettings />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("product categories select has categories given in props in options", () => {
    const optionsExamples = ["Lorem", "Ipsum", "Dolor", "Sit admet"];
    render(<ShopSettings categories={optionsExamples} />);
    const options = screen.getAllByRole("option");
    options.forEach((option, index) => {
      expect(option).toBeInTheDocument();
      expect(option.value).toBe(optionsExamples[index]);
    });
  });
  it("has filter button", () => {
    render(<ShopSettings />);
    expect(screen.getByRole("button", { name: "Filter" })).toBeInTheDocument();
  });
  it("calls callback after filter button click, and pass into it all form data into an object", async () => {
    const onFilter = vi.fn((filters) => {
      expect(filters).toEqual({
        mode: "list",
        minPrice: 0,
        maxPrice: 100,
        selectedCategory: "All",
      });
    });
    render(<ShopSettings onFilter={onFilter} />);
    const filterButton = screen.getByRole("button", { name: "Filter" });
    const user = userEvent.setup();
    await user.click(filterButton);
    expect(onFilter).toReturn();
  });
});
