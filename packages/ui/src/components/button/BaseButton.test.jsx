import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import BaseButton from "./BaseButton";
import { expect } from "vitest";
import { it } from "vitest";

describe("UI BaseButton", () => {
  it("renders button test", () => {
    render(<BaseButton>Book Ride</BaseButton>);
    expect(screen.getByText("Book Ride")).toBeInTheDocument();
  });
  it("renders as disabled when disabled prop is true", () => {
    render(<BaseButton disabled>Disabled</BaseButton>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });
});
