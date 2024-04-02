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
  it("listens to change event on minPrice input correctly", async () => {
    render(<ShopSettings />);
    const minPriceInput = screen.getByLabelText("Min. price:");
    const user = userEvent.setup();
    await user.click(minPriceInput);
    await user.clear(minPriceInput);
    await user.keyboard("20");
    expect(minPriceInput.value).toBe("20");
  });
  it("listens to change event on maxPrice input correctly", async () => {
    render(<ShopSettings />);
    const maxPriceInput = screen.getByLabelText("Max. price:");
    const user = userEvent.setup();
    await user.click(maxPriceInput);
    await user.clear(maxPriceInput);
    await user.keyboard("20");
    expect(maxPriceInput.value).toBe("20");
  });
  it("disallows putting not a number characters into minPrice input", async () => {
    render(<ShopSettings />);
    const minPriceInput = screen.getByLabelText("Min. price:");
    const user = userEvent.setup();
    await user.click(minPriceInput);
    await user.clear(minPriceInput);
    await user.keyboard("20w");
    expect(minPriceInput.value).toBe("20");
  });
  it("disallows putting not a number characters into maxPrice input", async () => {
    render(<ShopSettings />);
    const maxPriceInput = screen.getByLabelText("Max. price:");
    const user = userEvent.setup();
    await user.click(maxPriceInput);
    await user.clear(maxPriceInput);
    await user.keyboard("20w");
    expect(maxPriceInput.value).toBe("20");
  });
  it("listens to select category correctly", async () => {
    render(<ShopSettings categories={["example1", "example2", "example3"]} />);
    const user = userEvent.setup();
    const select = screen.getByRole("combobox", { name: "Category:" });
    await user.selectOptions(select, "example1");
    expect(select.value).toBe("example1");
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
  it("passes correct data after changing default", async () => {
    const onFilter = vi.fn((filters) => {
      expect(filters).toEqual({
        mode: "grid",
        minPrice: 20,
        maxPrice: 140,
        selectedCategory: "example2",
      });
    });
    render(
      <ShopSettings
        categories={["example1", "example2", "example3"]}
        onFilter={onFilter}
      />
    );
    const select = screen.getByRole("combobox");
    const maxPriceInput = screen.getByLabelText("Max. price:");
    const minPriceInput = screen.getByLabelText("Min. price:");
    const changeModeBtn = screen.getByRole("button", { name: "list mode" });
    const filterBtn = screen.getByRole("button", { name: "Filter" });
    const user = userEvent.setup();
    await user.click(minPriceInput);
    await user.clear(minPriceInput);
    await user.type(minPriceInput, "20");
    await user.click(maxPriceInput);
    await user.clear(maxPriceInput);
    await user.type(maxPriceInput, "140");
    await user.click(changeModeBtn);
    await user.selectOptions(select, "example2");
    await user.click(filterBtn);
  });
});
