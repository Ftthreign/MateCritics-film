import { IModal } from "../../../common/types/modal";
import myModal from "./modal.module.css";

const Modal = ({ children, isOpen, click }: IModal) => {
  if (!isOpen) return;

  const { container, child } = myModal;

  return (
    <div className={container} onClick={click}>
      <div className={child}>{children}</div>
    </div>
  );
};

export default Modal;
