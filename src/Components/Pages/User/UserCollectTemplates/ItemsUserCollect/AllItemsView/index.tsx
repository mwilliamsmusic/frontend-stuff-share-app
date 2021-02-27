import React from "react";
import {useRecoilValue} from "recoil";
import {
  CenterContent,
  PageContainer,
  UnorderListStyle,
} from "../../../../../../CSS/globalCSS";
import {
  userCollectItemAllState,
  userCollectInfoState,
} from "../../../../../../Store/userCollect/userAtoms";
import {itemUser} from "../../../../../../Utils/URL/reactURL";

import {CollectContainer, LinkStyle, ListStyle} from "../../../Utils/userCSS";

function AllItems() {
  const userCollectItemAll = useRecoilValue(userCollectItemAllState);
  const userCollectTitle = useRecoilValue(userCollectInfoState);

  const itemsList =
    userCollectItemAll &&
    Object.values(userCollectItemAll).map((item: any) => (
      <UnorderListStyle>
        <li key={item.id}>
          <CollectContainer>
            <LinkStyle to={`${itemUser}${item.id}`}>{item.title}</LinkStyle>
          </CollectContainer>
        </li>
      </UnorderListStyle>
    ));

  return (
    <CenterContent>
      <PageContainer>
        <h2> {userCollectTitle.title}</h2>
        <ListStyle> {itemsList}</ListStyle>
      </PageContainer>
    </CenterContent>
  );
}

export default AllItems;
