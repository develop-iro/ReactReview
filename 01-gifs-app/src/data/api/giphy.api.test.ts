import { describe, test, expect } from "vitest";
import { giphyApi } from "./giphy.api";

describe("Api - giphy", () => {
  test("should configure correctly", () => {
    const params = giphyApi.defaults.params;

    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
  });
});
