// This test suite uses Vitest and React Testing Library to verify the rendering and content of the MyAwesomeApp component.
//
// Concepts used:
// - render: Renders the React component and returns utility methods (like 'container') to query the DOM directly.
// - screen: Provides global access to queries for elements rendered in the virtual DOM, recommended for user-centric tests.
// - expect: Used for assertions to check if elements exist and contain expected text.
// - querySelector/querySelectorAll: DOM methods to select elements for fine-grained checks.
// - snapshot: Captures the rendered output and compares it to a stored reference. If the output changes, the test will fail until the snapshot is updated. Useful for detecting unexpected changes in the component structure or content.
//
// Differences between 'render' and 'screen':
// - 'render' returns a result object (with 'container', 'rerender', etc.) for direct DOM access and advanced testing.
// - 'screen' is a global utility that queries the rendered output, promoting tests that resemble user interactions and best practices.
//
// In this file, we use both approaches:
// - 'container.querySelector' for direct DOM checks (e.g., h1, ul li).
// - 'screen.getByText' for user-centric queries (e.g., animal description).
// - 'toMatchSnapshot' to ensure the component's output remains consistent over time.

import { describe, test, expect } from "vitest";
import MyAwesomeApp from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp ", () => {
  test("[Basic] should render component with initial state", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1Element = container.querySelector("h1");
    expect(h1Element).toBeDefined();

    expect(h1Element?.textContent).toContain("My Awesome App");

    const nameProfileElement = container.querySelector(".name-profile");
    expect(nameProfileElement).toBeDefined();

    const listItems = container.querySelectorAll("ul li");
    expect(listItems.length).toBe(6);
    expect(listItems[0].textContent).toContain("HTML");
    expect(listItems[1].textContent).toContain("CSS");
    expect(listItems[2].textContent).toContain("JavaScript");
    expect(listItems[3].textContent).toContain("TypeScript");
    expect(listItems[4].textContent).toContain("React");
    expect(listItems[5].textContent).toContain("Node.js");
  });
  test("[Intermediate] should render animal description correctly", () => {
    render(<MyAwesomeApp />);
    const animalInfoElement = screen.getByText(/Fluffy is a 3-year-old Cat./);
    expect(animalInfoElement).toBeDefined();
    expect(animalInfoElement?.textContent).toContain(
      "Fluffy is a 3-year-old Cat."
    );
  });
  test("[Advanced] should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
