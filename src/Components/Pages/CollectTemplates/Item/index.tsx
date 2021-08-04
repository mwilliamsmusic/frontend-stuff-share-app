import React from "react";
import {
  CenterContent,
  PageContainer,
} from "../../../../CSS/GlobalCSS/globalCSS";

function Item() {
  return (
    <CenterContent>
      <PageContainer>
        <h2> Item Title</h2>
        <h6> Collection link to items collect it belongs to</h6>
        <h4>Image Container</h4>
        <h5>Form</h5>
        <h5>Tags</h5>
        <h5>Coolest tags from user</h5>
        <h5>See all users collects</h5>
        <h5>other items with tags like this</h5>
      </PageContainer>
    </CenterContent>
  );
}

export default Item;
