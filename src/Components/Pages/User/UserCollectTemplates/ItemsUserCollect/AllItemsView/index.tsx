import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {StdBtn} from "../../../../../../CSS/buttonsCSS";
import {Spacer} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {RED} from "../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {
  DataArea,
  GridStandardList,
  ImageArea,
  StandardList,
  StandardListGridBtn,
} from "../../../../../../CSS/listsCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import {itemUser} from "../../../../../../Utils/URL/frontURL";

interface Props {
  deleteCollection: () => void;
}
// Displays all the items in a collection
function AllItemsView(props: Props) {
  const collectInfo = useAppSelector((state) => state.collectUser);
  const allItems = useAppSelector((state) => state.allItemsUser);
  const itemsList =
    allItems &&
    Object.values(allItems).map((item: any) => (
      <li key={item.id}>
        <StandardListGridBtn to={`${itemUser}${item.id}`}>
          <ImageArea>
            <img
              src={`${process.env.REACT_APP_IMAGE_BACKEND}${item.imagePath}`}
            />
          </ImageArea>
          <DataArea>
            <b>{item.title}</b>
          </DataArea>
        </StandardListGridBtn>
        <Spacer height="5px" />
      </li>
    ));

  return (
    <Fragment>
      <h2> {collectInfo.title} Collection</h2>
      <StdBtn backgroundColor={RED} onClick={props.deleteCollection}>
        <FontAwesomeIcon icon={faTrashAlt} size="1x" />`{` Delete Collection`}
      </StdBtn>
      <StandardList>
        <GridStandardList>
          <Spacer height="5px" />
          <ul>{itemsList} </ul>
        </GridStandardList>
      </StandardList>
    </Fragment>
  );
}

export default AllItemsView;
