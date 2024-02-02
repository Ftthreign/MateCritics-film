import "./navbar.css";

import { INavbarContainerProps } from "../../common/types/navbar";

const NavbarContainer = ({ children }: INavbarContainerProps) => {
  return <div className="navbar__container">{children}</div>;
};

export default NavbarContainer;
