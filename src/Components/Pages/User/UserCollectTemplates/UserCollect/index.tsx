import React, {useState, useEffect, Fragment} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useRecoilState} from "recoil";
import {userCollectAllState} from "../../../../../Store/userCollect/userAtoms";
import {idUser} from "../../../../../Utils/storageData";
import {Spacer} from "../../../../../CSS/globalCSS";
import {
  getAllUserCollectURL,
  postUserCollectURL,
} from "../../../../../Utils/URL/apiURL";
import {ICreateCollect} from "../../Utils/ICollectUser";
import {requestUser} from "../../Utils/axiosUserConfig";
import AllCollectView from "./AllCollectView";
import CreateCollectView from "./CreateCollectView";
import {redirect401} from "../../Utils/redirect";

function UserCollect() {
  const [collectTitle, setCollectTitle] = useState<string>();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [collectAll, setcollectAll] = useRecoilState(userCollectAllState);

  function getAllCollections() {
    const obj = {
      userId: 1,
      collectId: 16,
    };
    axios(getUser(getAllUserCollectURL, obj)).then(
      (res: AxiosResponse) => {
        setcollectAll(res.data);
      },
      (err: AxiosError) => {}
    );
  }

  function titleHandler(title: string) {
    setCollectTitle(title);
    createBtnHandler(title);
  }

  function createBtnHandler(name: string) {
    if (name === "") {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }

  function postCollect() {
    const obj: ICreateCollect = {
      title: collectTitle,
      userId: idUser,
    };
    axios(requestUser(postUserCollectURL, obj)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {
        redirect401(err.response.status);
      }
    );
    setCollectTitle("");
  }

  useEffect(() => {
    getAllCollections();
  }, []);

  return (
    <Fragment>
      <CreateCollectView
        collectTitle={collectTitle}
        submitDisabled={submitDisabled}
        titleHandler={titleHandler}
        postCollect={postCollect}
      />
      <Spacer height="100px" />
      <AllCollectView />
    </Fragment>
  );
}

export default UserCollect;
