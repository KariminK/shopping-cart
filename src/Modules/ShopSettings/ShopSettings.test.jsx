import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import ShopSettings from "./ShopSettings";
import userEvent from "@testing-library/user-event";

describe("Shop settings", () => {
  it("renders propertly", () => {
    render(<ShopSettings />);
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
  it("has grid to list mode switch button", () => {
    render(<ShopSettings mode={"list"} />);
    expect(
      screen.getByRole("button", { name: "list mode" })
    ).toBeInTheDocument();
  });
  it("if list mode button clicked, it's text changes to grid mode and calls callback", async () => {
    const changeModeHandle = vi.fn();
    render(<ShopSettings onModeChange={changeModeHandle} mode={"list"} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "list mode" });
    await user.click(button);
    expect(changeModeHandle).toBeCalled();
  });
  it("has min and max price inputs");
  it("has product categories select");
  it("product categories select has categories given in props in options");
  it("has filter button", () => {
    render(<ShopSettings />);
    expect(screen.getByRole("button", { name: "Filter" })).toBeInTheDocument();
  });
  it("calls callback after filter button click");
});
