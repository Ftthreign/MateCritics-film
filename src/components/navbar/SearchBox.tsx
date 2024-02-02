import { INavSearchProps } from "../../common/types/types";

const SearchBox = ({ query, setQuery }: INavSearchProps) => {
  return (
    <div className="navbar__input">
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
