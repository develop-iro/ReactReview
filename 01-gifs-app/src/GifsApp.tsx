// Main app component for GIF search functionality
// Modules used:
// - useTranslation: React-i18next hook for internationalization
// - GifGrid: Displays a grid of GIFs
// - Header: Shows the app title and description
// - LanguageSwitcher: Allows user to change language
// - PreviousSearches: Shows and manages recent search terms
// - SearchInput: Input field for searching GIFs
// - useGifs: Custom hook to manage GIF search logic and state

import { useTranslation } from "react-i18next";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { PreviousSearches } from "./components/PreviousSearches";
import { SearchInput } from "./components/SearchInput";
import { useGifs } from "./hooks/useGifs";

const GifsApp = () => {
  const { t } = useTranslation();
  const { gifResponse, previousSearches, handleSearch, handlePreviousSearch } =
    useGifs();

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
