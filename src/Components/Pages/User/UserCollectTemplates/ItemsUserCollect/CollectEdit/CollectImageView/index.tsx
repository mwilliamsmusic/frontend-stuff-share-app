import axios, {AxiosError, AxiosResponse} from "axios";
import React, {FormEvent, Fragment, useState} from "react";
import {StdBtn} from "../../../../../../../CSS/buttonsCSS";
import {
  DisplayImage,
  Spacer,
  StdForm,
} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../../Utils/Redux/ReduxHook";

interface Props {
  uploadCollectImg: (e: FormEvent, file: any) => void;
}

function CollectImageView(props: Props) {
  const [file, setFile] = useState<any>(null);
  const collect = useAppSelector((state) => state.collectUser);

  return (
    <Fragment>
      <h2>Edit {collect.title} Image</h2>
      <StdForm onSubmit={(e) => props.uploadCollectImg(e, file)}>
        <DisplayImage width="400px">
          <img
            src={`${process.env.REACT_APP_IMAGE_BACKEND}${collect.imagePath}`}
            alt={collect.title}
          ></img>
        </DisplayImage>

        <Spacer height="25px" />
        <label htmlFor="image">
          <input
            //  id="collect-image"
            // name="collect-image"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <StdBtn backgroundColor={BLUE} type="submit">
            Upload
          </StdBtn>
        </label>
      </StdForm>
    </Fragment>
  );
}
export default CollectImageView;
