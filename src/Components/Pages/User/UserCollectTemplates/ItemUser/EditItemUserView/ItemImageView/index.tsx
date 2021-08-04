import React, {Fragment, useState} from "react";
import {
  DisplayImage,
  Spacer,
  StdBtn,
  StdForm,
} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE} from "../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../../Utils/Redux/ReduxHook";

interface Props {
  uploadItemImage: (e: React.FormEvent<HTMLFormElement>, file: any) => void;
}
function ItemImageView(props: Props) {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const itemInfo = useAppSelector((state) => state.itemUser);

  const imgURL = `${process.env.REACT_APP_IMAGE_BACKEND}/stock/ssa.jpg`;
  return (
    <Fragment>
      <h2>Edit {itemInfo.title} Image</h2>
      <StdForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          props.uploadItemImage(e, selectedFile)
        }
      >
        <DisplayImage width="400px">
          <img src={imgURL} alt={itemInfo.title}></img>
        </DisplayImage>

        <Spacer height="25px" />
        <label htmlFor="image">
          <input
            //  id="collect-image"
            // name="collect-image"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <StdBtn bgColor={BLUE} type="submit">
            Upload
          </StdBtn>
        </label>
      </StdForm>
    </Fragment>
  );
}

export default ItemImageView;
