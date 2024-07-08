import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Amount from "./Amount";

describe("Amount component", () => {
  it("renders correctly with initial amount", () => {
    render(<Amount amount={10} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("10");
  });

  it("calls onIncrease when the increase button is clicked", async () => {
    const handleIncrease = vi.fn();
    render(<Amount onIncrease={handleIncrease} />);

    const increaseButton = screen.getByRole("button", { name: "increase" });
    await userEvent.click(increaseButton);
    expect(handleIncrease).toHaveBeenCalledTimes(1);
  });

  it("calls onDecrease when the decrease button is clicked", async () => {
    const handleDecrease = vi.fn();
    render(<Amount amount={10} onDecrease={handleDecrease} />);

    const decreaseButton = screen.getByRole("button", { name: "decrease" });
    await userEvent.click(decreaseButton);
    expect(handleDecrease).toHaveBeenCalledTimes(1);
  });

  it("applies the provided className", () => {
    const { container } = render(<Amount className="test-class" />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
