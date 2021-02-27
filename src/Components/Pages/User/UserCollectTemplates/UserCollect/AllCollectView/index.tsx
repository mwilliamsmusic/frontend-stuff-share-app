import React from "react";
import {CollectContainer, ListStyle, LinkStyle} from "../../../Utils/userCSS";
import {userCollectAllState} from "../../../../../../Store/userCollect/userAtoms";
import {useRecoilValue} from "recoil";
import {CenterContent, PageContainer} from "../../../../../../CSS/globalCSS";
import {itemsUserCollect} from "../../../../../../Utils/URL/reactURL";

function AllCollectView() {
  const collectAll = useRecoilValue(userCollectAllState);

  const listItem =
    collectAll &&
    Object.values(collectAll).map((collect: any) => (
      <li key={collect.id}>
        <CollectContainer>
          <LinkStyle to={`${itemsUserCollect}${collect.id}`}>
            {collect.title}
          </LinkStyle>
        </CollectContainer>
      </li>
    ));

  return (
    <CenterContent>
      <PageContainer>
        <h2>My Collections</h2>
        <ListStyle>{listItem}</ListStyle>
      </PageContainer>
    </CenterContent>
  );
}

export default AllCollectView;
