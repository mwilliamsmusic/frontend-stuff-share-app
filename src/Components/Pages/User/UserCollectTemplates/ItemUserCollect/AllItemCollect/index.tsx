import React from "react";
import ModalDisplay from "./ModalDisplay";
import {CollectContainer} from "../../../userCSS";
import {useRecoilState} from "recoil";
import {
  CenterContent,
  PageContainer,
  UnorderListStyle,
} from "../../../../../../CSS/globalCSS";
import {
  userCollectItemAllState,
  userCollectTitleState,
} from "../../../../../../Store/userCollect/userAtoms";

function AllItemCollect() {
  const [collectItemAll, setCollectItemAll] = useRecoilState(
    userCollectItemAllState
  );
  const [userCollectTitle, setUserCollectTitle] = useRecoilState(
    userCollectTitleState
  );
  const listItem =
    collectItemAll &&
    Object.values(collectItemAll).map((collect: any) => (
      <UnorderListStyle>
        <li key={collect.id}>
          <CollectContainer>
            <ModalDisplay title={collect.title} itemForm={collect.form} />
          </CollectContainer>
        </li>
      </UnorderListStyle>
    ));

  return (
    <div>
      <h2>{userCollectTitle && Object.values(userCollectTitle)} Collection</h2>
      {listItem}
    </div>
  );
}

export default AllItemCollect;
