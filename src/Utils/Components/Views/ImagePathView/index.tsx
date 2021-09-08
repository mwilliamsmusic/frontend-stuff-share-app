import React, {Fragment} from "react";
import {DisplayImage} from "../../../../CSS/GlobalCSS/globalCSS";

interface Props {
  imagePath: string;
}
function ImagePathView(props: Props) {
  return (
    <Fragment>
      <DisplayImage width="500px"></DisplayImage>
      <img
        src={`${process.env.REACT_APP_IMAGE_BACKEND}${props.imagePath}`}
      ></img>
    </Fragment>
  );
}
export default ImagePathView;
