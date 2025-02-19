import styled from "styled-components";
import {
  IBackgroundColor,
  IDisplayImage,
  IGradientBorder,
  ILineBreak,
  IResponsePrompt,
  ISpacer,
} from "./IGlobalCSS";
import {BORDER_RADIUS, GRADIENT, WHITE} from "./typesGlobalCSS";
import breakpoints from "../breakpoints";

export const GradientBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(244, 43, 75, 1) 40%,
    rgba(244, 43, 75, 0.8),
    rgba(244, 43, 75, 0.5),
    rgba(44, 78, 245, 0.3)
  );
  background-color: rgba(44, 78, 245, 1);
`;

//Centers entire page content
export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Main page content container
export const PageContainer = styled.div`
  background-color: ${WHITE};
  background-color: white;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 5px;
  width: 80%;
  color: black;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  border: 2px solid #2c4ef5;
  box-sizing: border-box;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  @media only screen and (min-width: 768px) {
    background-color: ${WHITE};
  }
`;

export const Spacer = styled.div<ISpacer>`
  height: ${(p) => p.height};
`;

export const Btn = styled.button`
  button:disabled {
  }
`;

export const CenterHeading = styled.div`
  margin: auto;
  text-align: center;
`;

export const UnorderListStyle = styled.ul`
  list-style: none;
`;

export const ListBtn = styled.button`
  color: #2c4ef5;
`;

export const StdForm = styled.form`
  input {
    border: 2px solid rgb(244, 43, 75);
    border-radius: 4px;
    outline: none;
  }
`;

export const DisplayImage = styled.div<IDisplayImage>`
  width: ${(p) => p.width};
  height: auto;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.05) 90%
  );
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
    display: block;
  }
`;

export const StdListBtn = styled.button``;

export const ResStyle = styled.div<IResponsePrompt>`
  background-color: ${(p) => p.bgColor};
  width: 100%;
  height: ${(p) => p.height};
`;

export const LineBreak = styled.div<ILineBreak>`
  box-sizing: border-box;
  background-color: ${(p) => p.bgColor};
  width: ${(p) => p.width};
  height: 1px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-image: linear-gradient(to right, ${(p) => p.bgImage});
`;

export const TagStyle = styled.div`
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgba(244, 43, 75, 1) 20%,
      rgba(244, 43, 75, 0.5),
      rgba(44, 78, 245, 0.3)
    );
    border-radius: 5px;
    color: white;
    background-color: rgba(44, 78, 245, 1);
  }
`;

export const GradientBoarder = styled.div<IGradientBorder>`
  max-width: ${(w) => w.maxWidth};
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, ${GRADIENT});
  padding: 3px;
`;

export const LargeScreen = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SmallScreen = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const TitleStyle = styled.div`
  text-transform: capitalize;
  text-align: center;
`;

export const ImagePathStyle = styled.div`
  img {
    width: 100px;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
    display: block;
  }
  @media only screen and (min-width: 769px) {
    img {
      width: 500px;
      height: auto;
      object-fit: contain;
      border-radius: 5px;
      display: block;
    }
  }
`;
