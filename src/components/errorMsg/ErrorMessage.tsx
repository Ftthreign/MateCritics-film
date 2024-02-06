import { IErrorMessage } from "../../../common/types/errorMsg";
import Style from "./error.module.css";

const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return <div className={Style.errorText}>{errorMessage}</div>;
};

export default ErrorMessage;
