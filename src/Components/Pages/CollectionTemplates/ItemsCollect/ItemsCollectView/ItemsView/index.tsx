import React from "react";

import {Spacer} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {
  DataArea,
  GridStandardList,
  ImageArea,
  StandardList,
  StandardListGridBtn,
} from "../../../../../../CSS/listsCSS";

import {IAllItems} from "../../../../../../Utils/Redux/Modules/item/allItemsSlice";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";

function ItemsView() {
  const allItems = useAppSelector((state) => state.allItems);
  const collections =
    allItems &&
    Object.values(allItems).map((item: IAllItems) => (
      <li key={item.title}>
        <StandardListGridBtn to={`/item/${item.id}`}>
          <ImageArea>
            <img
              src={`${process.env.REACT_APP_IMAGE_BACKEND}${item.imagePath}`}
            />
          </ImageArea>
          <Spacer height="5px" />
          <DataArea>
            <b> {item.title}</b>
            <Spacer height="5px" />
            {`Cool (${item.coolValue})`}
            <Spacer height="5px" />
          </DataArea>
        </StandardListGridBtn>
      </li>
    ));
  return (
    <StandardList>
      <ul>
        <GridStandardList>{collections}</GridStandardList>
      </ul>
    </StandardList>
  );
}
export default ItemsView;
