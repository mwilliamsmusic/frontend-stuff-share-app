import React from "react";
import {itemsUserCollect} from "../../../../../../Utils/URL/frontURL";
import {
  CenterContent,
  PageContainer,
} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import {
  DataArea,
  GridStandardList,
  ImageArea,
  StandardList,
  StandardListGridBtn,
} from "../../../../../../CSS/listsCSS";

// Displays all of the user's collections
function AllCollectsView() {
  const collectAll = useAppSelector((state) => state.allCollectsUser);

  const collectItems =
    collectAll &&
    Object.values(collectAll).map((collect: any) => (
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
      </li>
    ));
  /*

*/
  return (
    <CenterContent>
      <PageContainer>
        <h2>My Collections</h2>
        <StandardList>
          <ul>
            <GridStandardList>{collectItems}</GridStandardList>
          </ul>
        </StandardList>
      </PageContainer>
    </CenterContent>
  );
}

export default AllCollectsView;
