import { IErrorMessage } from "../../common/types/error";

const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return <div>{errorMessage}</div>;
};

export default ErrorMessage;
