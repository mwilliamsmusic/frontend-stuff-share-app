import React, {Fragment} from "react";
import {
  CenterContent,
  PageContainer,
  Spacer,
} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {
  DataArea,
  GridStandardList,
  ImageArea,
  StandardList,
  StandardListGridBtn,
} from "../../../../../../../CSS/listsCSS";
import {IAllCollectsUser} from "../../../../../../../Utils/Redux/Modules/user/allCollectsUserSlice";
import {useAppSelector} from "../../../../../../../Utils/Redux/ReduxHook";
import {itemsUserCollect} from "../../../../../../../Utils/URL/frontURL";

interface Props {
  allCollectsUser: Array<IAllCollectsUser>;
}
// Displays all of the user's collections
function AllCollectsView(props: Props) {
  const collectionsUser =
    props.allCollectsUser &&
    Object.values(props.allCollectsUser).map((collect: any) => (
      <li key={collect.id}>
        <StandardListGridBtn to={`${itemsUserCollect}${collect.id}`}>
          <ImageArea>
            <img
              src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
            />
          </ImageArea>
          <DataArea>
            <b> {collect.title}</b>
          </DataArea>
        </StandardListGridBtn>
        <Spacer height="10px" />
      </li>
    ));

  return (
    <CenterContent>
      <PageContainer>
        <h2>My Collections</h2>
        <StandardList>
          <GridStandardList>
            <ul>{collectionsUser} </ul>
          </GridStandardList>
        </StandardList>
      </PageContainer>
    </CenterContent>
  );
}

export default AllCollectsView;
