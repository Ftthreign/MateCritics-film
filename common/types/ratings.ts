export interface IStarRating {
  maxRating: 5 | number;
  color?: string;
  className?: string;
  messages?: [];
  defaultRating?: 0 | number;
  reset?: boolean;
  size: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSetRating: any;
}

export interface IStar {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRate: any;
  onHoverIn: () => void;
  onHoverOut: () => void;
  full: boolean;
  color: string;
  size: number;
}
