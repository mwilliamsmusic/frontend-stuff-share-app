import React from "react";
import {itemsUserCollect} from "../../../../../../Utils/URL/frontURL";
import {
  GridImage,
  LinkBtn,
  ListContainer,
} from "../../../../../../CSS/listsItems";
import {
  CenterContent,
  PageContainer,
} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";

// Displays all of the user's collections
function AllCollectsView() {
  const collectAll = useAppSelector((state) => state.allCollectsUser);

  const collectItems =
    collectAll &&
    Object.values(collectAll).map((collect: any) => (
      <li key={collect.id}>
        <LinkBtn to={`${itemsUserCollect}${collect.id}`}>
          <ListContainer>
            <GridImage>
              <img
                src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
              />
            </GridImage>

            <b> {collect.title}</b>
          </ListContainer>
        </LinkBtn>
      </li>
    ));
  /*

*/
  return (
    <CenterContent>
      <PageContainer>
        <h2>My Collections</h2>
        <ul>{collectItems}</ul>
      </PageContainer>
    </CenterContent>
  );
}

export default AllCollectsView;
