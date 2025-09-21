// This test suite uses Vitest and React Testing Library to verify the behavior of the ItemCounter component.
//
// Concepts used:
// - render: Renders the React component and returns utility methods (like 'getByText') for direct DOM queries.
// - screen: Provides global access to queries for elements rendered in the virtual DOM, recommended for user-centric tests.
// - fireEvent: Simulates user interactions (like button clicks) to test dynamic behavior.
// - expect: Used for assertions to check if elements exist and contain expected text.
//
// In this file, we use both approaches:
// - 'getByText' from 'render' for direct queries.
// - 'screen.getAllByRole' and 'screen.getByText' for user-centric queries and assertions.
// - 'fireEvent' to simulate button clicks and test state changes.

import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ItemCounter from "./ItemCounter";

describe("ItemCounter Component", () => {
  test("should render with initial count", () => {
    const { getByText } = render(<ItemCounter initialCount={5} />);

    expect(getByText("Count: 5")).toBeTruthy();
  });

  test("should increment the count when Increment button is clicked", () => {
    render(<ItemCounter initialCount={0} />);
    const [decrementButton, incrementButton] = screen.getAllByRole("button");
    fireEvent.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeTruthy();
    expect(decrementButton).toBeDefined();
  });

  test("should decrement the count when Decrement button is clicked", () => {
    render(<ItemCounter initialCount={2} />);
    const [decrementButton] = screen.getAllByRole("button");
    fireEvent.click(decrementButton);

    expect(screen.getByText("Count: 1")).toBeTruthy();
  });

  test("should not decrement below zero", () => {
    render(<ItemCounter initialCount={0} />);
    const [decrementButton] = screen.getAllByRole("button");
    fireEvent.click(decrementButton);

    expect(screen.getByText("Count: 0")).toBeTruthy();
  });
});
