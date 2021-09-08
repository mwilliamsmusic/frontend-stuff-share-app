import axios from "axios";
import React, {FormEvent, Fragment} from "react";
import {Spacer} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import {
  imagePostURL,
  patchUserItemURL,
} from "../../../../../../Utils/URL/apiURL";
import {
  imageFormData,
  ITEM_ORIGIN,
  patchUser,
  postImage,
} from "../../../Utils/axiosUserConfig";
import ItemForm from "./ItemForm";
import ItemImageView from "./ItemImageView";

function ItemEdit() {
  const item = useAppSelector((state) => state.itemUser);

  async function uploadItemImage(e: FormEvent, file: any) {
    e.preventDefault();
    const imageData: FormData = imageFormData(
      file,
      item.title,
      item.imagePath,
      ITEM_ORIGIN
    );
    try {
      const imagePost = await axios(postImage(imagePostURL, imageData));
      const data = {
        id: item.id,
        collectId: item.collectId,
        imagePath: imagePost.data.path,
      };
      const patch = await axios(patchUser(patchUserItemURL, data));
    } catch (error) {}

    window.location.reload();
  }

  return (
    <Fragment>
      <ItemImageView uploadItemImage={uploadItemImage} />
      <Spacer height="50px" />

      <ItemForm />
    </Fragment>
  );
}

export default ItemEdit;
