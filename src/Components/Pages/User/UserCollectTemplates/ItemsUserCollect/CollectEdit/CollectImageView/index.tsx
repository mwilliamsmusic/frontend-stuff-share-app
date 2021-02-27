import React, {Fragment, useState} from "react";
import {
  CenterContent,
  PageContainer,
  StdBtn,
  StdForm,
} from "../../../../../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../CSS/ITGlobalCSS";

interface Props {
  uploadCollectImg: (e: React.FormEvent<HTMLFormElement>, file: any) => void;
}

function CollectImageView(props: Props) {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  return (
    <Fragment>
      <h2>Edit Image</h2>
      <StdForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          props.uploadCollectImg(e, selectedFile)
        }
      >
        <label htmlFor="image">
          <input
            //  id="collect-image"
            // name="collect-image"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <StdBtn bgColor={BLUE} brdColor={PINK} type="submit">
            Upload
          </StdBtn>
        </label>
      </StdForm>
    </Fragment>
  );
}
export default CollectImageView;
