import { describe, expect, it } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook } from "@testing-library/react";

describe("Hook - useGifs", () => {
  it("matches snapshot", () => {
    const { result } = renderHook(() => useGifs());

    expect(result).toMatchSnapshot();
  });
});
