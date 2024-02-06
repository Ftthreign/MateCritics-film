import { Tooltip } from "@mui/material";
// import { useState } from "react";

import NavStyle from "./navbar.module.css";
const NavAccount = () => {
  return (
    <Tooltip title="see watched film" arrow>
      <div className={NavStyle.avatar__navbar}>
        <p>G</p>
      </div>
    </Tooltip>
  );
};

export default NavAccount;
