import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import AllItemCollect from "./AllItemCollect";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import {
  userCollectItemAllState,
  userCollectTitleState,
  userCollectFormState,
  titleString,
} from "../../../../../Store/userCollect/userAtoms";
import {
  itemUserCollectAll,
  getCollectTitle,
  updateUserCollect,
} from "../axiosUserCollectConfig";
import {
  CenterContent,
  PageContainer,
  Spacer,
} from "../../../../../CSS/globalCSS";
import CollectForm from "./AllItemCollect/CollectForm";
import {idUser} from "../../../../../Utils/storageData";
import {UpdateCollect} from "../../IUser";

interface RouteParams {
  id: string;
}

interface IKey {
  [key: string]: {}; // Indexable; not a new property
}

const ItemUserCollect = () => {
  const {id} = useParams<RouteParams>();
  let idString: string = id;

  const [userCollectItemAll, setUserCollectItemAll] = useRecoilState(
    userCollectItemAllState
  );
  const [userCollectTitle, setUserCollectTitle] = useRecoilState(
    userCollectTitleState
  );
  const [userCollectForm, setUserCollectForm] = useRecoilState(
    userCollectFormState
  );
  const value = useRecoilValue(titleString) || "blah";

  // Update Collection Form
  function updateCollectForm(form: object) {
    const obj: UpdateCollect = {
      id: parseInt(idString),
      title: value,
      userId: idUser,

      collectForm: JSON.stringify(form),
    };
    axios(updateUserCollect(obj)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
  }

  // GET all items in collection
  const allItemUserCollect = () => {
    axios(itemUserCollectAll(idString)).then(
      (res: AxiosResponse) => {
        setUserCollectItemAll(res.data);
      },
      (err: AxiosError) => {}
    );
  };

  // GET main collection title and form
  const collectTitleForm = () => {
    axios(getCollectTitle(idString)).then(
      (res: AxiosResponse) => {
        setUserCollectTitle(res.data.title);
        setUserCollectForm(JSON.parse(res.data.collectForm));
      },
      (err: AxiosError) => {}
    );
  };

  function deleteFormKey(key: string) {
    const state: object = userCollectForm;
    const newObj: IKey = Object.assign({}, state);
    delete newObj[key];

    const deleteKey = Object.assign({}, newObj);

    setUserCollectForm(deleteKey);
    updateCollectForm(userCollectForm);
  }

  function addFormKey(field: any, e: React.FormEvent) {
    e.preventDefault();

    const state: object = userCollectForm;
    const fieldString: string = String(field);
    const newObj: IKey = {};
    newObj[fieldString] = "";

    const addKey = Object.assign({}, state, newObj);

    setUserCollectForm(addKey);
    updateCollectForm(userCollectForm);
  }

  useEffect(() => {
    allItemUserCollect();
    collectTitleForm();
  }, []);

  return (
    <div>
      <CenterContent>
        <PageContainer>
          <AllItemCollect />
        </PageContainer>
      </CenterContent>
      <Spacer height="100px" />
      <CollectForm deleteFormKey={deleteFormKey} addFormKey={addFormKey} />
    </div>
  );
};

export default ItemUserCollect;
