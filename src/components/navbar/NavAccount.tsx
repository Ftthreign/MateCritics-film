import { Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import NavStyle from "@style/navbar.module.css";
const NavAccount = () => {
  return (
    <Tooltip title="see watched film" arrow>
      <div className={NavStyle.avatar__navbar}>
        <PersonIcon />
      </div>
    </Tooltip>
  );
};

export default NavAccount;
