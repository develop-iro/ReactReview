import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { PreviousSearches } from "./components/PreviousSearches";
import { SearchInput } from "./components/SearchInput";
import { mockGifs } from "./data/mockData";

const searches = ["Superman", "Batman", "Spiderman", "Ironman"];

const GifsApp = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [previousSearches] = useState([
    "Superman",
    "Batman",
    "Spiderman",
    "Ironman",
  ]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handlePreviousSearch = (search: string) => {
    setSearchTerm(search);
  };

  return (
    <>
      <Header title={t("app.title")} description={t("app.description")} />
      <LanguageSwitcher />
      <SearchInput
        placeHolder={t("app.placeholder")}
        ariaLabel={t("app.search")}
      />
      <PreviousSearches
        title={t("app.previousSearches")}
        searches={searches}
        onSearchClick={handlePreviousSearch}
      />
      <GifGrid gifs={mockGifs} />
    </>
  );
};

export default GifsApp;
