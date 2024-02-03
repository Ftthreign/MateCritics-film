import { IErrorMessage } from "../../common/types/error";

import "./error.css";
const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return <div>{errorMessage}</div>;
};

export default ErrorMessage;
