import React from "react";
import {CenterContent, PageContainer, CenterHeading} from "../../CSS/globalCSS";
import {CollectContainer, ListStyle} from "./typeCSS";

interface Props {
  list: any;
  type: string;
}

function Type(prop: Props) {
  // Display Collections or Faves
  const listItem =
    prop.list &&
    Object.values(prop.list).map((collect: any) => (
      <li key={collect.id}>
        <CollectContainer>{collect.title}</CollectContainer>
      </li>
    ));
  return (
    <div>
      <CenterHeading>
        <h2>{prop.type}</h2>
      </CenterHeading>
      <ListStyle>{listItem}</ListStyle>
    </div>
  );
}

export default Type;
