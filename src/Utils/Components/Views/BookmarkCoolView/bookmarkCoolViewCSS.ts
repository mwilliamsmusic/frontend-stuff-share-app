import styled from "styled-components";

export const BooknarkCoolGrid = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "bookmark cool";
  display: grid;
`;

export const BookmarkArea = styled.div`
  grid-area: bookmark;
`;

export const CoolArea = styled.div`
  grid-area: cool;
`;
