import axios, {AxiosError, AxiosResponse} from "axios";
import React, {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useRecoilState} from "recoil";
import {Spacer} from "../../../../../CSS/globalCSS";
import {
  userItemFormState,
  userItemInfoState,
} from "../../../../../Store/userCollect/userAtoms";
import {IKey} from "../../../../../Utils/Components/ITGlobal";
import {idUser} from "../../../../../Utils/storageData";
import {
  getUserItemURL,
  patchUserCollectURL,
} from "../../../../../Utils/URL/apiURL";
import {patchUser, requestUser} from "../../Utils/axiosUserConfig";
import {addField} from "../../Utils/editForm";
import {IGetItem, IPatchItem} from "../../Utils/IItemUser";
import Item from "./Item";

interface RouteParams {
  id: string;
}

export function ItemUser() {
  const {id} = useParams<RouteParams>();
  const idString: string = id;
  const [userItemInfo, setUserItemInfo] = useRecoilState(userItemInfoState);
  const [userItemForm, setUserItemForm] = useRecoilState(userItemFormState);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // PATCH item Form
  function patchItemForm(formObj: object) {
    const data: IPatchItem = {
      id: parseInt(idString),
      title: userItemInfo.title,
      userId: idUser,
      collectId: userItemInfo.collectId,
      form: JSON.stringify(formObj),
    };
    axios(patchUser(patchUserCollectURL, data)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  function getItem() {
    const data: IGetItem = {
      id: parseInt(idString, 10),
      userId: idUser,
    };
    axios(requestUser(getUserItemURL, idString)).then(
      (res: AxiosResponse) => {
        setUserItemInfo(res.data);
        setUserItemForm(JSON.parse(res.data.form));
      },
      (err: AxiosError) => {}
    );
  }

  function saveForm() {}

  function addFormField(key: string) {
    /*
    const form = userItemForm;

    const addKey: IKey = {};
    addKey[key] = "";

    const newForm = {...form, ...addKey};
    */
    // const newObj: object = addField();
    //   patchItemForm(newObj);
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Fragment>
      <Item
        saveForm={saveForm}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        patchItemForm={patchItemForm}
      />
      <Spacer height="100px" />
      <AddField addFormField={addFormField} />
    </Fragment>
  );
}

export default ItemUser;
