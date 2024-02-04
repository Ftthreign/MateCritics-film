import { node } from "./movie";

export interface IModal {
  children: node;
  isOpen: boolean;
  click: () => void;
}
