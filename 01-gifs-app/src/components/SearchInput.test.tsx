import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("should render correctly", () => {
    const { container } = render(<SearchInput placeHolder={""} />);
    expect(container).toMatchSnapshot();
  });

  it("should call correct onSearch function after 800ms", async () => {
    const fn = vi.fn();
    render(<SearchInput placeHolder={""} onSearch={fn} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "matrix" } });

    await waitFor(() => {
      expect(fn).toHaveBeenCalled();
      expect(fn).toHaveBeenCalledWith("matrix");
    });
  });

  it("should only once with last value after 800ms", async () => {
    const fn = vi.fn();
    render(<SearchInput placeHolder={""} onSearch={fn} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "m" } });
    fireEvent.change(input, { target: { value: "ma" } });
    fireEvent.change(input, { target: { value: "mat" } });
    fireEvent.change(input, { target: { value: "matr" } });
    fireEvent.change(input, { target: { value: "matri" } });
    fireEvent.change(input, { target: { value: "matrix" } });
    await waitFor(() => {
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith("matrix");
    });
  });
  it("should call onSearch on button click", () => {
    const fn = vi.fn();
    render(<SearchInput placeHolder={""} onSearch={fn} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it("should call onSearch on input blur", () => {
    const fn = vi.fn();
    render(<SearchInput placeHolder={""} onSearch={fn} />);
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(fn).toHaveBeenCalled();
  });
  it("should call onSearch on Enter key press", () => {
    const fn = vi.fn();
    render(<SearchInput placeHolder={""} onSearch={fn} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(fn).toHaveBeenCalled();
  });
  it("should set placeholder text", () => {
    const { getByRole } = render(<SearchInput placeHolder={"Search..."} />);
    const input = getByRole("textbox");
    expect(input.hasAttribute("placeholder")).toBe(true);
    expect(input.getAttribute("placeholder")).toBe("Search...");
  });
});
