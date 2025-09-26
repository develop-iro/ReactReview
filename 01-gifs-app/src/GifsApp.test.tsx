import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import GifsApp from "./GifsApp";

describe("GifsApp", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<GifsApp />);
    expect(asFragment()).toMatchSnapshot();
  });
});
