import { node } from "./movie";

export interface INavbarContainerProps {
  children: node;
}

export interface INavSearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
