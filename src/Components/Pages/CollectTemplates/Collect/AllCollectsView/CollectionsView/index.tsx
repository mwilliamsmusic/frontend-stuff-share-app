import {faGlasses} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import {CenterContent, Spacer} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {
  DataArea,
  GridStandardList,
  ImageArea,
  StandardList,
  StandardListGridBtn,
} from "../../../../../../CSS/listsCSS";
import {IAllCollects} from "../../../../../../Utils/Redux/Modules/collect/allCollectsSlice";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";

function CollectionsView() {
  const allCollects = useAppSelector((state) => state.allCollects);
  const collections =
    allCollects &&
    Object.values(allCollects).map((collect: IAllCollects) => (
      <li key={collect.title}>
        <StandardListGridBtn to="">
          <ImageArea>
            <img
              src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
            />
          </ImageArea>
          <DataArea>
            <b> {collect.title}</b>
            <Spacer height="5px" />

            {`Cool (${collect.coolValue})`}

            <Spacer height="10px" />
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
export default CollectionsView;
