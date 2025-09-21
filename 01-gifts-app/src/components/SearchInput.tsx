import { useState, useEffect } from "react";
interface SearchInputProps {
  buttonText?: string;
  placeHolder: string;
  ariaLabel?: string;
  onSearch?: (value: string) => void;
}

export const SearchInput = ({
  buttonText,
  placeHolder,
  ariaLabel,
  onSearch,
}: SearchInputProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(query);
    }, 800);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSearch = () => {
    onSearch?.(query);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container content-center">
      <input
        type="text"
        placeholder={placeHolder}
        aria-label={ariaLabel}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleSearch}
      />
      <button onClick={handleSearch}>{buttonText}</button>
    </div>
  );
};
