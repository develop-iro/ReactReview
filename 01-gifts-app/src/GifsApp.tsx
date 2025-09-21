import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { PreviousSearches } from "./components/PreviousSearches";
import { SearchInput } from "./components/SearchInput";
import { contains, formatValue, isEmpty } from "./utils/utils.helper";
import { getGif } from "./data";

import type { Gif } from "./data/interfaces";

const GifsApp = () => {
  const { t } = useTranslation();
  const [gifResponse, setGifResponse] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handleSearch = async (value: string, previous?: boolean) => {
    if (
      (contains(previousSearches, value) && !previous) ||
      isEmpty(value) ||
      !value ||
      previousSearches.length >= 8
    ) {
      return;
    }

    const formattedValue = formatValue(value);

    const gifs = await getGif(
      formattedValue,
      document.documentElement.lang || "en"
    );

    setGifResponse(gifs);
    if (!previous) {
      setPreviousSearches((prevSearches) =>
        [value, ...prevSearches].splice(0, 8)
      );
    }
  };

  const handlePreviousSearch = (search: string) => {
    handleSearch(search, true);
  };

  return (
    <>
      <Header title={t("app.title")} description={t("app.description")} />
      <LanguageSwitcher />
      <SearchInput
        buttonText={t("app.search")}
        placeHolder={t("app.placeholder")}
        ariaLabel={t("app.search")}
        onSearch={handleSearch}
      />
      <PreviousSearches
        title={t("app.previousSearches")}
        searches={previousSearches}
        onSearchClick={handlePreviousSearch}
      />
      <GifGrid gifs={gifResponse} />
    </>
  );
};

export default GifsApp;
