import axios from "axios";
import React, {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  SyntheticEvent,
} from "react";
import {Spacer} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import {usernameLS} from "../../../../../../Utils/storageData";
import {
  imagePostURL,
  patchUserCollectURL,
  updateCollectForm,
} from "../../../../../../Utils/URL/apiURL";
import {
  COLLECT_ORIGIN,
  imageFormData,
  patchUser,
  postImage,
} from "../../../Utils/axiosUserConfig";
import {ICollectForm} from "../../../Utils/Interfaces/ICollectUser";
import CollectForm from "./CollectForm";
import CollectImageView from "./CollectImageView";

function CollectEdit() {
  const collect = useAppSelector((state) => state.collectUser);

  function saveForm() {
    const data: ICollectForm = {
      collectId: collect.collectId,
      collectForm: collect.collectForm,
    };
    axios(patchUser(updateCollectForm, data));
    window.location.reload();
  }

  async function uploadCollectImg(e: FormEvent, file: any) {
    e.preventDefault();
    const newImageName = usernameLS + collect.title;
    const trimName = newImageName.replace(/\s+/g, "");
    const imageData: FormData = imageFormData(
      file,
      trimName,
      collect.image,
      COLLECT_ORIGIN
    );
    try {
      const imagePost = await axios(postImage(imagePostURL, imageData));
    } catch (error) {}
    try {
      const data = {collectId: collect.collectId, image: trimName};
      const patch = await axios(patchUser(patchUserCollectURL, data));
    } catch (error) {}
    window.location.reload();
  }

  return (
    <Fragment>
      <CollectImageView uploadCollectImg={uploadCollectImg} />
      <Spacer height="50px" />
      <CollectForm />
    </Fragment>
  );
}

export default CollectEdit;
