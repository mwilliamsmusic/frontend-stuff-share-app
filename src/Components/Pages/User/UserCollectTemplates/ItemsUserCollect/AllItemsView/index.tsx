import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {
  StdBtn,
  UnorderListStyle,
} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {RED} from "../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import {itemUser} from "../../../../../../Utils/URL/frontURL";
import {CollectContainer, LinkStyle, ListStyle} from "../../../Utils/userCSS";

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
      <UnorderListStyle>
        <li key={item.collectId}>
          <CollectContainer>
            <LinkStyle to={`${itemUser}${item.itemId}`}>{item.title}</LinkStyle>
          </CollectContainer>
        </li>
      </UnorderListStyle>
    ));

  return (
    <Fragment>
      <h2> {collectInfo.title} Collection</h2>
      <StdBtn bgColor={RED} onClick={props.deleteCollection}>
        <FontAwesomeIcon icon={faTrashAlt} size="1x" />`{` Delete Collection`}
      </StdBtn>
      <ListStyle> {itemsList}</ListStyle>
    </Fragment>
  );
}

export default AllItemsView;
