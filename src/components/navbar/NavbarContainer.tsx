import "./navbar.css";

import NavbarLogo from "./NavbarLogo";
import SearchBox from "./SearchBox";
import NavAccount from "./NavAccount";

const NavbarContainer = () => {
  return (
    <div className="navbar__container">
      <NavbarLogo />
      <SearchBox />
      <NavAccount />
    </div>
  );
};

export default NavbarContainer;
