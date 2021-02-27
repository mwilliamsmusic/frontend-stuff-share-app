import React, {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useRecoilState, useSetRecoilState} from "recoil";
import {
  userCollectItemAllState,
  userCollectInfoState,
} from "../../../../../Store/userCollect/userAtoms";
import {Spacer} from "../../../../../CSS/globalCSS";
import {idUser} from "../../../../../Utils/storageData";
import {IKey} from "../../../../../Utils/Components/ITGlobal";
import {
  getAllUserItemURL,
  getUserCollectURL,
  patchUserCollectURL,
  postImgCollectURL,
  postUserItemURL,
} from "../../../../../Utils/URL/apiURL";
import {patchUser, postImage} from "../../Utils/axiosUserConfig";
import {IGetAllItem, IPostItem} from "../../Utils/IItemUser";
import {IGetCollect, IPatchCollect} from "../../Utils/ICollectUser";
import CollectEdit from "./CollectEdit";
import AllItemsView from "./AllItemsView";
import AddItemView from "./AddItemView";

interface RouteParams {
  id: string;
}

const ItemUserCollect = () => {
  const {id} = useParams<RouteParams>();
  const idString: string = id;
  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemDisable, setItemDisable] = useState<boolean>(false);
  const setUserCollectItemAll = useSetRecoilState(userCollectItemAllState);
  const [userCollectInfo, setUserCollectInfo] = useRecoilState(
    userCollectInfoState
  );

  function uploadCollectImg(e: React.FormEvent<HTMLFormElement>, file: any) {
    //  e.preventDefault();
    const formData = new FormData();
    formData.append("imageName", idString);
    formData.append("img", file);

    axios(postImage(postImgCollectURL, formData)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  // PATCH Collection Form
  function patchCollectForm(form: object) {
    const data: IPatchCollect = {
      id: parseInt(idString),
      title: userCollectInfo.title,
      userId: idUser,
      collectForm: JSON.stringify(form),
    };
    axios(patchUser(patchUserCollectURL, data)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  // GET all items in collection
  const getAllItemCollect = () => {
    setUserCollectItemAll([]);
    const data: IGetAllItem = {
      collectId: userCollectInfo.id,
      userId: idUser,
    };
    axios(getUser(getAllUserItemURL, data)).then(
      (res: AxiosResponse) => {
        setUserCollectItemAll(res.data);
      },
      (err: AxiosError) => {}
    );
  };

  // GET main collection title and form
  const getCollectInfo = () => {
    const data: IGetCollect = {
      id: parseInt(idString),
      userId: idUser,
    };
    axios(getUser(getUserCollectURL, data)).then(
      (res: AxiosResponse) => {
        setUserCollectInfo(res.data);
      },
      (err: AxiosError) => {}
    );
  };

  function deleteFormKey(key: string) {
    const state = userCollectInfo;
    const form: IKey = JSON.parse(userCollectInfo.collectForm);

    delete form[key];

    setUserCollectInfo({...state, ...form});
    patchCollectForm(JSON.parse(userCollectInfo.collectForm));
  }

  function addFormKey(key: string) {
    const state = userCollectInfo;
    const form: IKey = JSON.parse(userCollectInfo.collectForm);

    const addKey: IKey = {};
    addKey[key] = "";

    const newForm = {...form, ...addKey};

    setUserCollectInfo({...state, ...newForm});
    patchCollectForm(userCollectInfo);
  }

  function itemHandler(title: string) {
    setItemTitle(title);
    disableBtnHandler(title);
  }

  function disableBtnHandler(check: string) {
    if (check === "" || null) {
      setItemDisable(true);
    } else {
      setItemDisable(false);
    }
  }

  function postItem() {
    const obj: IPostItem = {
      title: itemTitle,
      userId: idUser,
      collectId: parseInt(idString),
      form: JSON.stringify(userCollectInfo.collectForm),
    };
    axios(postUser(postUserItemURL, obj)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
    setItemTitle("");
  }

  useEffect(() => {
    getCollectInfo();
    getAllItemCollect();
  }, []);

  return (
    <Fragment>
      <AddItemView
        itemTitle={itemTitle}
        postItem={postItem}
        itemDisable={itemDisable}
        itemHandler={itemHandler}
        title={userCollectInfo.title}
      />
      <Spacer height="100px" />
      <CollectEdit
        deleteFormKey={deleteFormKey}
        addFormKey={addFormKey}
        uploadCollectImg={uploadCollectImg}
      />
      <Spacer height="100px" />

      <AllItemsView />
    </Fragment>
  );
};

export default ItemUserCollect;
