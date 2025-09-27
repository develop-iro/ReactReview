import { beforeEach, describe, expect, it, vi } from "vitest";
import { getGif } from "./get-gif.action";
import AviosMockAdapter from "axios-mock-adapter";
import { giphyResponse } from "../../../../tests/mocks/giphy-response.mock.data.ts";
import { giphyApi } from "../../api/giphy.api";

describe("Resources - getGif", () => {
  let mock: AviosMockAdapter;
  beforeEach(() => {
    mock = new AviosMockAdapter(giphyApi);
  });

  it("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphyResponse);

    const gifs = await getGif("saitama", "en");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(gif).toHaveProperty("id");
      expect(gif).toHaveProperty("title");
      expect(gif).toHaveProperty("url");
      expect(gif).toHaveProperty("width");
      expect(gif).toHaveProperty("height");
    });
  });

  it("should handle error when search fail", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    mock.onGet("/search").reply(400, { message: "Bad Request" });

    const gifs = await getGif("saitama", "en");

    expect(gifs).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error fetching GIFs:",
      expect.anything()
    );
  });
});
