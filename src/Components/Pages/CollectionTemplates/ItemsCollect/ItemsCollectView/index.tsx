import React, {Fragment} from "react";
import {
  ImagePathStyle,
  LineBreak,
  Spacer,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {GRADIENT} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";

import {useAppSelector} from "../../../../../Utils/Redux/ReduxHook";
import ItemsView from "./ItemsView";

function ItemsCollectView() {
  const collect = useAppSelector((state) => state.collect);
  return (
    <Fragment>
      <h2>{collect.title} Collection</h2>
      <Spacer height="15px" />
      <LineBreak width="100%" bgColor={GRADIENT} />
      <Spacer height="30px" />

      <ImagePathStyle>
        <img
          src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
        ></img>
      </ImagePathStyle>
      <Spacer height="30px" />
      <LineBreak width="100%" bgColor={GRADIENT} />
      <Spacer height="30px" />
      <ItemsView />
      <LineBreak width="100%" bgColor={GRADIENT} />
      <Spacer height="30px" />
    </Fragment>
  );
}

export default ItemsCollectView;
