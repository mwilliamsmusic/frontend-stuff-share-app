import React from "react";
import {CollectContainer, ListStyle, LinkStyle} from "../../../userCSS";
import {userCollectAllState} from "../../../../../../Store/userCollect/userAtoms";
import {useRecoilState} from "recoil";
import {CenterContent, PageContainer} from "../../../../../../CSS/globalCSS";

function AllUserCollect() {
  const url = "/item/user/collect/";
  const [collectAll, setCollectAll] = useRecoilState(userCollectAllState);
  const listItem =
    collectAll &&
    Object.values(collectAll).map((collect: any) => (
      <li key={collect.id}>
        <CollectContainer>
          <LinkStyle to={`${url}${collect.id}`}> {collect.title}</LinkStyle>
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

export default AllUserCollect;
