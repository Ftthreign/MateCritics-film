import { INavSearchProps } from "../../common/types/navbar";

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
