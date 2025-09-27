import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useGifs } from "./useGifs";
import * as gifActions from "../data/resources/gifs/get-gif.action";

describe("Hook - useGifs", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifResponse).toEqual([]);
    expect(result.current.previousSearches).toEqual([]);
    expect(typeof result.current.handleSearch).toBe("function");
    expect(typeof result.current.handlePreviousSearch).toBe("function");
  });

  it("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("cat");
    });

    expect(result.current.previousSearches).toEqual(
      expect.arrayContaining(["cat"])
    );
    expect(result.current.gifResponse.length).toBe(25);
    expect(result.current.previousSearches.length).toBe(1);
  });

  it("should return a list of gifs when handlePreviousSearch is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handlePreviousSearch("saitama");
    });

    expect(result.current.gifResponse).toEqual([]);
    expect(result.current.previousSearches).toEqual([]);
    expect(result.current.gifResponse.length).toBe(0);
  });

  it("should return a list of gifs from cache when handlePreviousSearch is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handlePreviousSearch("saitama");
    });

    vi.spyOn(gifActions, "getGif").mockRejectedValue("API error");

    expect(result.current.gifResponse).toEqual([]);
    expect(result.current.previousSearches).toEqual([]);
    expect(result.current.gifResponse.length).toBe(0);
  });

  it("should not update state when search is duplicate", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("cat");
    });

    await act(async () => {
      await result.current.handleSearch("cat");
    });

    expect(result.current.previousSearches).toEqual(
      expect.arrayContaining(["cat"])
    );
    expect(result.current.gifResponse.length).toBe(25);
    expect(result.current.previousSearches.length).toBe(1);
  });

  it("should not update state when search is empty or invalid", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("");
    });

    await act(async () => {
      await result.current.handleSearch("   ");
    });

    expect(result.current.previousSearches).toEqual([]);
    expect(result.current.gifResponse.length).toBe(0);
    expect(result.current.previousSearches.length).toBe(0);
  });

  it("should not update state when previousSearches exceed max limit", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, "getGif").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("cat");
      await result.current.handleSearch("snake");
      await result.current.handleSearch("dog");
      await result.current.handleSearch("lion");
      await result.current.handleSearch("tiger");
      await result.current.handleSearch("elephant");
      await result.current.handleSearch("giraffe");
      await result.current.handleSearch("bear");
      await result.current.handleSearch("wolf");
    });

    expect(result.current.previousSearches.length).toBe(8);
    expect(result.current.previousSearches).not.toEqual(
      expect.arrayContaining(["cat"])
    );
  });
});
