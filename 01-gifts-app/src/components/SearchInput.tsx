interface SearchInputProps {
  placeHolder: string;
  ariaLabel?: string;
}

export const SearchInput = ({ placeHolder, ariaLabel }: SearchInputProps) => {
  return (
    <div className="search-container content-center">
      <input type="text" placeholder={placeHolder} aria-label={ariaLabel} />
    </div>
  );
};
