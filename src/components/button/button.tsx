import type { IButton } from "@/common/types/button";

const Button = ({ children, click }: IButton) => {
  return <div onClick={click}>{children}</div>;
};

export default Button;
