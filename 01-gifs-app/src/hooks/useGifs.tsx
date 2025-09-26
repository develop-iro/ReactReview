import { useRef, useState } from "react";
import { contains, formatValue, isEmpty } from "../utils/utils.helper";
import { getGif } from "../data";
import type { Gif } from "../data/interfaces";

// const gifsCache: Record<string, Gif[]> = {};

export function useGifs() {
  const [gifResponse, setGifResponse] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const gifCache = useRef<Record<string, Gif[]>>({});

  const handleSearch = async (value: string, previous?: boolean) => {
    const isDuplicate = contains(previousSearches, value);
    const isInvalid = isEmpty(value) || !value;
    const isMaxSearches = previousSearches.length >= 8;
    if ((isDuplicate && !previous) || isInvalid || isMaxSearches) return;

    const formattedValue = formatValue(value);

    if (!previous) {
      setPreviousSearches((prevSearches) =>
        [value, ...prevSearches].splice(0, 8)
      );
    }

    const gifs = await getGif(
      formattedValue,
      document.documentElement.lang || "en"
    );
    setGifResponse(gifs);
    gifCache.current[value] = gifs;
  };

  const handlePreviousSearch = (search: string) => {
    const cachedGifs = gifCache.current[search];

    if (cachedGifs) {
      setGifResponse(cachedGifs);
      return;
    }

    handleSearch(search, true);
  };

  return {
    gifResponse,
    previousSearches,
    handleSearch,
    handlePreviousSearch,
  };
}
