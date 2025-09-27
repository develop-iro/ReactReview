import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header.tsx";

describe("Component Header", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Header title="Test Title" description="Test Description" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders title and description", () => {
    render(<Header title="Test Title" description="Test Description" />);
    expect(screen.getByText("Test Title")).toBeTruthy();
    expect(screen.getByText("Test Description")).toBeTruthy();
  });
  it("renders title only when description is not provided", () => {
    render(<Header title="Only Title" />);
    expect(screen.getByText("Only Title")).toBeTruthy();
    expect(screen.queryByText("Test Description")).toBeNull();
  });
});
