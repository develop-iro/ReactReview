import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { PreviousSearches } from "./PreviousSearches";

describe("PreviousSearches", () => {
  it("should render correctly", () => {
    const { container } = render(<PreviousSearches title={""} searches={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("should display the title", () => {
    render(<PreviousSearches title={"My Searches"} searches={[]} />);
    expect(screen.getByText("My Searches")).toBeTruthy();
  });
  it("should display the searches", () => {
    render(
      <PreviousSearches title={"My Searches"} searches={["matrix", "neo"]} />
    );
    expect(screen.getByText("matrix")).toBeTruthy();
    expect(screen.getByText("neo")).toBeTruthy();
  });

  it("should call onSearchClick when a search is clicked", () => {
    const fn = vi.fn();
    render(
      <PreviousSearches
        title={"My Searches"}
        searches={["matrix", "neo"]}
        onSearchClick={fn}
      />
    );
    fireEvent.click(screen.getByText("matrix"));
    expect(fn).toHaveBeenCalledWith("matrix");
    fireEvent.click(screen.getByText("neo"));
    expect(fn).toHaveBeenCalledWith("neo");
  });
});
