import axios, {AxiosError, AxiosResponse} from "axios";
import React, {SyntheticEvent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
  CenterContent,
  PageContainer,
  Spacer,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {
  IAllItemsUser,
  updateAllItemsUser,
} from "../../../../../Utils/Redux/Modules/user/allItemsUserSlice";
import {updateItemFormUser} from "../../../../../Utils/Redux/Modules/user/itemFormUserSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Utils/Redux/ReduxHook";
import {usernameLS} from "../../../../../Utils/storageData";
import {
  getUserItemURL,
  imagePostURL,
  updateItemFormURL,
} from "../../../../../Utils/URL/apiURL";
import {disableButton} from "../../../../../Utils/validation";
import {patchUser, postImage, postUser} from "../../Utils/axiosUserConfig";
import {IDeleteCollect, IForm} from "../../Utils/Interfaces/ICollectUser";
import {IGetItem, IItemForm} from "../../Utils/Interfaces/IItemUser";
import EditItemUserView from "./EditItemUserView";

interface RouteParams {
  id: string;
}

function ItemUser() {
  const {id} = useParams<RouteParams>();
  const idString: string = id;

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [newField, setNewField] = useState<string>("");
  const [fieldDisabled, setFieldDisabled] = useState<boolean>(true);

  const [valueField, setValueField] = useState<string>("");
  const [valueDisabled, setValueDisabled] = useState<boolean>(true);

  const itemForm = useAppSelector((state) => state.itemFormUser);
  const dispatch = useAppDispatch();

  // Update item Form
  function updateItemForm(formObj: object) {
    const data: IItemForm = {
      itemId: parseInt(idString, 10),
      itemForm: JSON.stringify(formObj),
    };
    axios(patchUser(updateItemFormURL, data)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  function uploadItemImage(e: React.FormEvent<HTMLFormElement>, file: any) {
    //  e.preventDefault();
    const formData = new FormData();
    formData.append("imageName", usernameLS + idString);
    formData.append("image", file);
    formData.append("username", usernameLS);

    axios(postImage(imagePostURL, formData)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  function getItem() {
    const data: IGetItem = {
      itemId: parseInt(idString, 10),
    };
    axios(postUser(getUserItemURL, data)).then(
      (res: AxiosResponse) => {
        const items: Array<IAllItemsUser> = res.data;
        dispatch(updateAllItemsUser(items));

        const itemForm: Array<IForm> = res.data.itemForm;
        dispatch(updateItemFormUser(itemForm));
      },
      (err: AxiosError) => {}
    );
  }

  function saveForm() {
    const data: IItemForm = {
      itemId: parseInt(idString, 10),
      itemForm: JSON.stringify(itemForm),
    };
    axios(patchUser(updateItemFormURL, data)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  function fieldHandler(field: string) {
    setFieldDisabled(disableButton(field));
    setNewField(field);
  }

  function valueHandler(field: string) {
    setValueDisabled(disableButton(field));
    setValueField(field);
  }

  function addFieldState(event: SyntheticEvent) {
    event.preventDefault();

    if (!itemForm.some((form) => form.field === newField)) {
      const fieldObj: IForm = {field: newField, value: ""};
      const newArr: Array<IForm> = [];
      newArr.push(fieldObj);
      const mergeState: Array<IForm> = [...itemForm, ...newArr];
      dispatch(updateItemFormUser(mergeState));
    }
    setNewField("");
    // setNewField(null);
    setFieldDisabled(false);
    //addField(iFormView, newField);
    // setIFormView(addField);
  }

  function updateFieldState(event: SyntheticEvent, field: string) {
    event.preventDefault();
    const stateArr: Array<IForm> = [...itemForm];
    const objIndex = stateArr.findIndex((obj) => obj.field === field);
    let obj = {field: field, value: valueField} as IForm;
    stateArr.splice(objIndex, 1, obj);

    dispatch(updateItemFormUser(stateArr));
  }
  function deleteFieldState(event: SyntheticEvent, deleteKey: string) {
    event.preventDefault();
    const someArray: Array<IForm> = itemForm;

    const newArr: Array<IForm> = someArray.filter(
      (key) => key.field !== deleteKey
    );
    dispatch(updateItemFormUser(newArr));
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <CenterContent>
      <PageContainer>
        <EditItemUserView
          valueField={valueField}
          valueHandler={valueHandler}
          saveForm={saveForm}
          addFieldState={addFieldState}
          deleteFieldState={deleteFieldState}
          fieldHandler={fieldHandler}
          fieldDisabled={fieldDisabled}
          newField={newField}
          updateFieldState={updateFieldState}
          uploadItemImage={uploadItemImage}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />

        <Spacer height="50px" />
      </PageContainer>
    </CenterContent>
  );
}

export default ItemUser;
