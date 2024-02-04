import { IErrorMessage } from "../../../common/types/errorMsg";

const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return <div>{errorMessage}</div>;
};

export default ErrorMessage;
