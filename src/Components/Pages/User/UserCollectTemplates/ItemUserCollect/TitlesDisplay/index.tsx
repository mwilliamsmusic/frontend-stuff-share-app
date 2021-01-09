import React from "react";
import ModalDisplay from "./ModalDisplay";
import {LinkStyle} from "./../../../userCSS";
import {useRecoilState} from "recoil";
import {collectItemState} from "./../../../../../../Store/atoms";
import {CollectContainer} from "./../../../userCSS";
function TitlesDisplay() {
  const [collectItem, setCollectItem] = useRecoilState(collectItemState);

  const listItem =
    collectItem &&
    Object.values(collectItem).map((collect: any) => (
      <ul>
        <li key={collect.id}>
          <ModalDisplay title={collect.title} />
        </li>
      </ul>
    ));

  return <div>{listItem}</div>;
}

export default TitlesDisplay;
