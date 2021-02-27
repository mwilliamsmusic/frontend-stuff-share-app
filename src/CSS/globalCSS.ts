import styled from "styled-components";
import {ISpacer, IStdBtn} from "./ITGlobalCSS";

//Centers entire page content
export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Main page content container
export const PageContainer = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: whitesmoke;
  width: 80%;
  color: black;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  border: 2px solid #2c4ef5;
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

export const StdBtn = styled.button<IStdBtn>`
  border-radius: 4px;
  background-color: ${(p) => p.bgColor};
  border: 2px solid ${(p) => p.brdColor};
  color: white;
  margin: 5px;
  padding: 5px;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.05) 90%
  );
  :hover {
    transition: box-shadow 0.2s ease-in;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
  :disabled {
    transition: opacity 0.2s;
    background-color: darkgrey;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StdForm = styled.form`
  input {
    border: 2px solid rgb(244, 43, 75);
    border-radius: 4px;
    outline: none;
  }
`;

export const StdListBtn = styled.button``;
