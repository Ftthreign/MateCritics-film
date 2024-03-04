import { INavSearchProps } from "@/common/types/navbar";
import { useKey } from "@/hooks/useKey";
import { useRef } from "react";
import NavStyle from "./navbar.module.css";

const SearchBox = ({ query, setQuery }: INavSearchProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", () => {
    if (!inputEl.current) return;
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={NavStyle.navbar__input}>
      <input
        type="text"
        placeholder="Search movie here"
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
};

export default SearchBox;
