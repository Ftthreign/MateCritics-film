import { INavSearchProps } from "../../../common/types/navbar";

import NavStyle from "./navbar.module.css";

const SearchBox = ({ query, setQuery }: INavSearchProps) => {
  return (
    <div className={NavStyle.navbar__input}>
      <input
        type="text"
        placeholder="Search movie here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
