import { IContainer } from "../common/types/movie";

import "./movie/movie.css";

const ContainerBox = ({ children }: IContainer) => {
  return <div className="box__movie">{children}</div>;
};

export default ContainerBox;
