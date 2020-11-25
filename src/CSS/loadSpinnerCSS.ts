import styled from "styled-components";

export const Load = styled.div`
  border: 16px solid #f42b4b;
    border-radius: 50%;
    border-top: 16px solid  #2c4ef5;
    border-bottom: 16px solid #2c4ef5;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
