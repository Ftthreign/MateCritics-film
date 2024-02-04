import { Tooltip } from "@mui/material";
// import { useState } from "react";

import NavStyle from "./navbar.module.css";
const NavAccount = () => {
  return (
    <Tooltip title="see watched film" arrow>
      <div
        className={NavStyle.avatar__navbar}
        // onClick={() => setIsOpen((e) => !e)}
      >
        <p>G</p>
        {/* <Modal open={isOpen}>
          <div className="modal__account">DATA HERE</div>
        </Modal> */}
      </div>
    </Tooltip>
  );
};

export default NavAccount;
