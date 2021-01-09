import React from "react";

import {CollectContainer, ListStyle, LinkStyle} from "../../../userCSS";
import {collectMainState} from "../../../../../../Store/atoms";

import {useRecoilState} from "recoil";

function AllUserCollect() {
  const url = "/item/user/collect/";
  const [collectMain, setcollectMain] = useRecoilState(collectMainState);
  const listItem =
    collectMain &&
    Object.values(collectMain).map((collect: any) => (
      <li key={collect.id}>
        <CollectContainer>
          <LinkStyle to={`${url}${collect.id}`}> {collect.title}</LinkStyle>
        </CollectContainer>
      </li>
    ));
  return (
    <div>
      Collects
      <ListStyle>{listItem}</ListStyle>
    </div>
  );
}

export default AllUserCollect;
