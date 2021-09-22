import React, {Fragment} from "react";
import {
  ImagePathStyle,
  LineBreak,
  Spacer,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {GRADIENT} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../Utils/Redux/ReduxHook";

function ItemView() {
  const item = useAppSelector((state) => state.item);
  return (
    <Fragment>
      <h2>{item.title}</h2>
      <Spacer height="15px" />
      <LineBreak width="100%" bgColor={GRADIENT} />
      <Spacer height="30px" />

      <ImagePathStyle>
        <img
          src={`${process.env.REACT_APP_IMAGE_BACKEND}${item.imagePath}`}
        ></img>
      </ImagePathStyle>
      <Spacer height="30px" />
      <LineBreak width="100%" bgColor={GRADIENT} />
      <Spacer height="30px" />

      {item.itemForm}
      <LineBreak width="100%" bgColor={GRADIENT} />
      <Spacer height="30px" />
    </Fragment>
  );
}

export default ItemView;
