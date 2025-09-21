// This test file is intended for testing the First component using Vitest and React Testing Library.
//
// Concepts to explain and possible mocks:
// - Mocking props: You can pass different props to the component to test various scenarios.
// - Mocking child components: Use vi.mock or manual mocks to replace child components with simple versions.
// - Mocking functions: If your component receives callback props, you can use jest.fn() or vi.fn() to track calls and arguments.
// - Mocking modules: Use vi.mock() to mock imports like helpers or API calls.
// - Mocking context: If your component uses React context, you can wrap it with a custom provider in your tests.
// - Snapshot: Use toMatchSnapshot to ensure the rendered output remains consistent over time.
//
// Example mocks you can use in this suite:
// - Mock ItemCounter to isolate First's logic:
//   vi.mock('./ItemCounter', () => ({ default: () => <div>Mocked Counter</div> }));
// - Mock a helper function:
//   vi.mock('../helpers/format.helper', () => ({ formatCurrency: vi.fn() }));
// - Mock a callback prop:
//   const mockCallback = vi.fn();
//   render(<First onAction={mockCallback} />);
//
// These mocks help you isolate the component under test and control its dependencies, making your tests more reliable and focused.
import { describe, test, expect, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import First from "./First";
vi.mock("./ItemCounter", () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  default: (props: unknown) => <div>Mocked Counter</div>,
}));

describe("First Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<First />);
    expect(container).toMatchSnapshot();
  });
  test("should render heading and paragraph", () => {
    const { getByText } = render(<First />);
    expect(getByText("My First Component")).toBeTruthy();
    expect(getByText("This is a simple component.")).toBeTruthy();
  });
  test("should render mocked ItemCounter components", () => {
    const { getAllByText } = render(<First />);
    const counters = getAllByText("Mocked Counter");
    expect(counters.length).toBe(3);
  });
});
