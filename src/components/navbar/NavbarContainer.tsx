import NavStyle from "./navbar.module.css";

import { INavbarContainerProps } from "@/common/types/navbar";

const NavbarContainer = ({ children }: INavbarContainerProps) => {
  return <div className={NavStyle.navbar__container}>{children}</div>;
};

export default NavbarContainer;
