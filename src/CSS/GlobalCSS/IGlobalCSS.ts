import {Color} from "./typesGlobalCSS";

export interface IBackgroundColor {
  backgroundColor: Color;
}

export interface ISpacer {
  height: string;
}

export interface IDisplayImage {
  width: string;
}

export interface IResponsePrompt {
  bgColor: Color;
  height: string;
}

export interface ILineBreak {
  bgColor: Color;
  width: string;
  bgImage?: Color;
}

export interface IGradientBorder {
  maxWidth: string;
}
