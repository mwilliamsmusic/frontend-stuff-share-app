import axios from "axios";
import React, {FormEvent, Fragment} from "react";
import {LineBreak, Spacer} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, GRADIENT} from "../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import {
  imagePostURL,
  patchUserCollectURL,
} from "../../../../../../Utils/URL/apiURL";
import {
  COLLECT_ORIGIN,
  imageFormData,
  patchUser,
  postImage,
} from "../../../Utils/axiosUserConfig";

import CollectForm from "./CollectForm";
import CollectImageView from "./CollectImageView";

function CollectEdit() {
  const collect = useAppSelector((state) => state.collectUser);

  async function uploadCollectImg(e: FormEvent, file: any) {
    e.preventDefault();
    const imageData: FormData = imageFormData(
      file,
      collect.title,
      collect.imagePath,
      COLLECT_ORIGIN
    );
    try {
      const imagePost = await axios(postImage(imagePostURL, imageData));
      const data = {id: collect.id, imagePath: imagePost.data.path};
      const patch = await axios(patchUser(patchUserCollectURL, data));
    } catch (error) {}

    window.location.reload();
  }

  return (
    <Fragment>
      <CollectForm />

      <Spacer height="25px" />
      <LineBreak bgColor={BLUE} width={"90%"} bgImage={GRADIENT} />
      <Spacer height="25px" />

      <CollectImageView uploadCollectImg={uploadCollectImg} />
      <Spacer height="25px" />
    </Fragment>
  );
}

export default CollectEdit;
