import React, {Fragment} from "react";
import {
  CenterContent,
  PageContainer,
  Spacer,
} from "../../../../CSS/GlobalCSS/globalCSS";
import {
  GridStandardListMobile,
  StandardList,
  StandardListGridBtnMobile,
} from "../../../../CSS/listsCSS";
import {IAllCollects} from "../../../../Utils/Redux/Modules/collect/allCollectsSlice";

import {itemsUserCollect} from "../../../../Utils/URL/frontURL";

interface Props {
  allCollections: Array<IAllCollects>;
}
// Displays all of the user's collections
function CollectionsViewMobile(props: Props) {
  const collectionsUser =
    props.allCollections &&
    Object.values(props.allCollections).map((collect: any) => (
      <li key={collect.id}>
        <StandardListGridBtnMobile to={`${itemsUserCollect}${collect.id}`}>
          <img
            src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
          />
          <Spacer height="5px" />
          <b> {collect.title}</b>
          {`Cool (${collect.coolValue})`}
        </StandardListGridBtnMobile>
      </li>
    ));

  return (
    <Fragment>
      <StandardList>
        <ul>
          <GridStandardListMobile>{collectionsUser}</GridStandardListMobile>
        </ul>
      </StandardList>
    </Fragment>
  );
}

export default CollectionsViewMobile;
