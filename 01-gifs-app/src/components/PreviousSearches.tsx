import type { FC } from "react";

interface Props {
  title: string;
  searches: string[];
  onSearchClick?: (search: string) => void;
}

export const PreviousSearches: FC<Props> = ({
  title,
  searches,
  onSearchClick,
}) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onSearchClick?.(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
