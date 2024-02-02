import { useState } from "react";

import NavbarContainer from "./components/navbar/NavbarContainer";
import NavbarLogo from "./components/navbar/NavbarLogo";
import SearchBox from "./components/navbar/SearchBox";
import NavAccount from "./components/navbar/NavAccount";

const API_KEY: string = import.meta.env.VITE_API_KEY;

const App = () => {
  const [query, setQuery] = useState<string>("doraemon");

  return (
    <div>
      <NavbarContainer>
        <NavbarLogo />
        <SearchBox query={query} setQuery={setQuery} />
        <NavAccount />
      </NavbarContainer>
    </div>
  );
};

export default App;
