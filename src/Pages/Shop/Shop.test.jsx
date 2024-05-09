import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Shop", () => {
  it("renders products given in props", () => {
    render(
      <Shop
        products={[
          {
            title: "Lorem ipsum",
            description: "lorem ipsum dolor sit admet",
            price: 32,
            image: "",
          },
          {
            title: "Dolor sit amet",
            description: "test test test",
            price: 120.25,
            image: "",
          },
        ]}
      />,
      { wrapper: BrowserRouter }
    );
    const listItems = screen.getAllByRole("gridcell");
    expect(listItems).toHaveLength(2);
  });
  it("has options section", () => {
    render(<Shop />, { wrapper: BrowserRouter });
  });
});
