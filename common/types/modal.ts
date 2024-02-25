import { node } from "./movie";

export interface IModal {
  children: node;
  click: () => void;
  isOpen: boolean;
}
