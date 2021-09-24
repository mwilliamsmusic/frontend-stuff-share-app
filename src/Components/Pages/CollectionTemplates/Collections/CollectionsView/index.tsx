import React from "react";
import {CenterContent, Spacer} from "../../../../../CSS/GlobalCSS/globalCSS";
import {
  DataArea,
  GridStandardList,
  ImageArea,
  StandardList,
  StandardListGridBtn,
} from "../../../../../CSS/listsCSS";
import {IAllCollects} from "../../../../../Utils/Redux/Modules/collect/allCollectsSlice";

interface Props {
  allCollections: Array<IAllCollects>;
}
function CollectionsView(props: Props) {
  const collections =
    props.allCollections &&
    Object.values(props.allCollections).map((collect: IAllCollects) => (
      <li key={collect.id}>
        <StandardListGridBtn to={`/collection/${collect.id}`}>
          <ImageArea>
            <img
              src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
            />
          </ImageArea>
          <Spacer height="5px" />
          <DataArea>
            <b> {collect.title}</b>
            <Spacer height="5px" />

            {`Cool (${collect.coolValue})`}
          </DataArea>
        </StandardListGridBtn>
        <Spacer height="10px" />
      </li>
    ));
  return (
    <CenterContent>
      <StandardList>
        <ul>
          <GridStandardList>{collections}</GridStandardList>
        </ul>
      </StandardList>
    </CenterContent>
  );
}
export default CollectionsView;
