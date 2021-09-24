import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Utils/Redux/ReduxHook";
import {IForm, IId, ITag} from "../../../../../Utils/basicInterfaces";
import {updateItemFormUser} from "../../../../../Utils/Redux/Modules/user/itemFormUserSlice";
import {postUser} from "../../Utils/axiosUserConfig";
import {
  CenterContent,
  LineBreak,
  PageContainer,
  Spacer,
  TitleStyle,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, GRADIENT} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";
import ItemTags from "./ItemEdit/ItemTags";
import ItemEdit from "./ItemEdit";
import {
  IItemUser,
  updateItemUser,
} from "../../../../../Utils/Redux/Modules/user/itemUserSlice";
import {
  deleteUserItemURL,
  getAllItemTagsURL,
  getUserItemURL,
} from "../../../../../Utils/URL/apiURL";
import {collectUserId} from "../../../../../Utils/URL/frontURL";
import {updateTagsItemUser} from "../../../../../Utils/Redux/Modules/user/tagsItemUserSlice";

interface RouteParams {
  id: string;
}

function ItemUser() {
  const {id} = useParams<RouteParams>();
  const idNumber: number = parseInt(id, 10);

  const [newImageName, setNewImageName] = useState("");

  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => state.itemUser);

  // GET ONE for main collection info.
  async function getItemInfo() {
    const data: IId = {
      id: idNumber,
    };

    // dispatch(updateItemFormUser([]));
    try {
      const itemInfo = await axios(postUser(getUserItemURL, data));
      const item: IItemUser = itemInfo.data;
      dispatch(updateItemUser(item));
      const itemForm: Array<IForm> = JSON.parse(itemInfo.data.itemForm);
      dispatch(updateItemFormUser(itemForm));
    } catch (error) {}
  }

  function deleteItem() {
    const data: IId = {
      id: idNumber,
    };
    axios(postUser(deleteUserItemURL, data)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
    window.location.replace(
      process.env.REACT_APP_FRONTEND + collectUserId + item.collectId
    );
  }

  async function getAllTags() {
    const data = {collectId: idNumber};
    try {
      const allTags = await axios(postUser(getAllItemTagsURL, data));
      const itemTags: Array<ITag> = allTags.data;
      dispatch(updateTagsItemUser(itemTags));
    } catch (error) {}
  }

  useEffect(() => {
    getItemInfo();

    getAllTags();
  }, []);

  return (
    <CenterContent>
      <PageContainer>
        <TitleStyle>{item.title}</TitleStyle>
        <Spacer height="25px" />
        <LineBreak bgColor={BLUE} width={"90%"} bgImage={GRADIENT} />
        <Spacer height="25px" />

        <ItemTags />

        <Spacer height="25px" />
        <LineBreak bgColor={BLUE} width={"90%"} bgImage={GRADIENT} />
        <Spacer height="25px" />

        <ItemEdit />

        <Spacer height="25px" />
        <LineBreak bgColor={BLUE} width={"90%"} />
        <Spacer height="25px" />
      </PageContainer>
    </CenterContent>
  );
}

export default ItemUser;
