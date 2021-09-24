import React from "react";
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
import {IAllCollectsUser} from "../../../../Utils/Redux/Modules/user/allCollectsUserSlice";
import {useAppSelector} from "../../../../Utils/Redux/ReduxHook";
import {itemsUserCollect} from "../../../../Utils/URL/frontURL";

interface Props {
  allCollectsUser: Array<IAllCollectsUser>;
}
// Displays all of the user's collections
function AllCollectsUserViewMobile(props: Props) {
  const collectionsUser =
    props.allCollectsUser &&
    Object.values(props.allCollectsUser).map((collect: any) => (
      <li key={collect.id}>
        <StandardListGridBtnMobile to={`${itemsUserCollect}${collect.id}`}>
          <img
            src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
          />

          <Spacer height="5px" />

          <b> {collect.title}</b>
        </StandardListGridBtnMobile>
      </li>
    ));

  return (
    <CenterContent>
      <PageContainer>
        <h2>My Collections</h2>
        <StandardList>
          <ul>
            <GridStandardListMobile>{collectionsUser}</GridStandardListMobile>
          </ul>
        </StandardList>
      </PageContainer>
    </CenterContent>
  );
}

export default AllCollectsUserViewMobile;
