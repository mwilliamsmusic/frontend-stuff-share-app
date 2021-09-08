import React, {FormEvent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
  deleteUserCollectURL,
  getAllCollectTagsURL,
  getUserCollectItemsURL,
  getUserCollectURL,
  postUserItemURL,
} from "../../../../../Utils/URL/apiURL";
import {postUser} from "../../Utils/axiosUserConfig";
import {IPostItem} from "../../Utils/Interfaces/IItemUser";
import CollectEdit from "./CollectEdit";
import AllItemsView from "./AllItemsView";
import AddItemView from "./AddItemView";

import {disableButton} from "../../../../../Utils/validation";
import {
  CenterContent,
  LineBreak,
  PageContainer,
  Spacer,
} from "../../../../../CSS/GlobalCSS/globalCSS";

import {BLUE, GRADIENT} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Utils/Redux/ReduxHook";
import {
  IAllItemsUser,
  updateAllItemsUser,
} from "../../../../../Utils/Redux/Modules/user/allItemsUserSlice";
import {
  ICollectUser,
  updateCollectUser,
} from "../../../../../Utils/Redux/Modules/user/collectUserSlice";
import {updateCollectFormUser} from "../../../../../Utils/Redux/Modules/user/collectFormUserSlice";

import CollectTags from "./CollectEdit/CollectTags";
import {updateTagsCollectUser} from "../../../../../Utils/Redux/Modules/user/tagsCollectUserSlice";
import {
  ICollectId,
  IForm,
  IId,
  ITag,
} from "../../../../../Utils/basicInterfaces";
import {collectUser} from "../../../../../Utils/URL/frontURL";

interface RouteParams {
  id: string;
}

function ItemsUserCollect() {
  const {id} = useParams<RouteParams>();
  const idNumber: number = parseInt(id, 10);

  const [newImageName, setNewImageName] = useState("");
  const [itemTitle, setItemTitle] = useState<string>(null);
  const [itemDisable, setItemDisable] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const collectForm = useAppSelector((state) => state.collectFormUser);

  // GET all items in collection
  async function getAllItemsCollect() {
    const data: ICollectId = {
      collectId: idNumber,
    };
    try {
      const allUserItems = await axios(postUser(getUserCollectItemsURL, data));
      const items: Array<IAllItemsUser> = allUserItems.data;
      dispatch(updateAllItemsUser(items));
    } catch (error) {}
  }
  // GET ONE for main collection info.
  async function getCollectInfo() {
    const data: IId = {
      id: idNumber,
    };

    dispatch(updateCollectFormUser([]));
    try {
      const collectInfo = await axios(postUser(getUserCollectURL, data));
      const collect: ICollectUser = collectInfo.data;
      dispatch(updateCollectUser(collect));
      const collectForm: Array<IForm> = JSON.parse(
        collectInfo.data.collectForm
      );
      dispatch(updateCollectFormUser(collectForm));
    } catch (error) {}
  }

  function deleteCollection() {
    const data: IId = {
      id: idNumber,
    };
    axios(postUser(deleteUserCollectURL, data)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
    window.location.replace(process.env.REACT_APP_FRONTEND + collectUser);
  }

  function itemHandler(title: string) {
    setItemTitle(title);
    disableButton(title);
  }

  // Posts item to collection and sets itemForm with collectForm fields
  async function postItem(event: FormEvent) {
    event.preventDefault();
    const obj: IPostItem = {
      title: itemTitle,
      collectId: idNumber,
      itemForm: JSON.stringify(collectForm),
    };
    try {
      const postItem = await axios(postUser(postUserItemURL, obj));
    } catch (error) {}
    setItemTitle("");
  }

  async function getAllTags() {
    const data: ICollectId = {collectId: idNumber};
    try {
      const allTags = await axios(postUser(getAllCollectTagsURL, data));
      const collectTags: Array<ITag> = allTags.data;
      dispatch(updateTagsCollectUser(collectTags));
    } catch (error) {}
  }

  useEffect(() => {
    getCollectInfo();
    getAllItemsCollect();
    getAllTags();
  }, []);

  return (
    <CenterContent>
      <PageContainer>
        <AddItemView
          itemTitle={itemTitle}
          postItem={postItem}
          itemDisable={itemDisable}
          itemHandler={itemHandler}
        />
        <Spacer height="25px" />
        <LineBreak bgColor={BLUE} width={"90%"} bgImage={GRADIENT} />
        <Spacer height="25px" />

        <CollectEdit />

        <Spacer height="25px" />
        <LineBreak bgColor={BLUE} width={"90%"} bgImage={GRADIENT} />
        <Spacer height="25px" />

        <CollectTags />
        <Spacer height="25px" />
        <LineBreak bgColor={BLUE} width={"90%"} bgImage={GRADIENT} />
        <Spacer height="25px" />

        <AllItemsView deleteCollection={deleteCollection} />
      </PageContainer>
    </CenterContent>
  );
}

export default ItemsUserCollect;
