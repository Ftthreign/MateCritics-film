import type { node } from "./movie";

export interface IButton {
  children: node;
  click: () => void;
}
