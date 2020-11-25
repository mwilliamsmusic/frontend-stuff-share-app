import styled from "styled-components";

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
  box-shadow: 4px 4px rgba(0, 0, 0, 0.3);
  border: 2px solid #2c4ef5;
`;

export const Spacer = styled.div`
  height: 100px;
`;

export const Btn = styled.button`
  button:disabled {
  }
`;

export const CenterHeading = styled.div`
  margin: auto;
  text-align: center;
`;

/*

Main 
rgb(244,43,75)

Complement
rgb(44,245,211)
*/
