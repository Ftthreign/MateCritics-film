import "./navbar.css";

import { INavbarContainerProps } from "../../common/types/types";

const NavbarContainer = ({ children }: INavbarContainerProps) => {
  return <div className="navbar__container">{children}</div>;
};

export default NavbarContainer;
