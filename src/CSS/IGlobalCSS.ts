export const BLUE = "rgba(44, 78, 245,1)";
export const PINK = "rgba(244,43,75,1)";
export const GREEN = "rgba(44,245,211,1)";

type Color = "rgba(44, 78, 245,1)" | "rgba(244,43,75,1)" | "rgba(44,245,211,1)";

export interface IStdBtn {
  bgColor: Color;
  brdColor: Color;
}

export interface ISpacer {
  height: string;
}
