import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { describe } from "vitest";
import { it } from "vitest";
import { expect } from "vitest";

describe("Auth Button component", () => {
  it("renders button text correctly", () => {
    render(<Button>Login</Button>);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
