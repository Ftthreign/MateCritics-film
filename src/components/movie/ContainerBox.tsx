import { IContainer } from "@/common/types/movie";

import movieStyle from "@style/movie.module.css";

const ContainerBox = ({ children }: IContainer) => {
  return <div className={movieStyle.box__movie}>{children}</div>;
};

export default ContainerBox;
