import { Tooltip } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const NavAccount = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Tooltip title="see watched film" arrow>
      <div className="avatar__navbar" onClick={() => setIsOpen((e) => !e)}>
        <p>G</p>
        <Modal open={isOpen}>
          <div className="modal__account">DATA HERE</div>
        </Modal>
      </div>
    </Tooltip>
  );
};

export default NavAccount;
