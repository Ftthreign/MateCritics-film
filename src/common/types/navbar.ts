export interface INavbarContainerProps {
  children: React.ReactNode;
}

export interface INavSearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
