import { giphyApi } from "../../api/giphy.api";
import type { GifsResponse, Gif } from "../../interfaces";

export const getGif = async (query: string, lang: string): Promise<Gif[]> => {
  try {
    if (query.trim().length === 0) return [];

    const response = await giphyApi<GifsResponse>(`search`, {
      params: {
        q: query,
        limit: 25,
        lang,
        rating: "g",
      },
    });

    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: parseInt(gif.images.original.width, 10),
      height: parseInt(gif.images.original.height, 10),
    }));
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
};
